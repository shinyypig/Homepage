# TiKZ Externalize

TiKZ figures can be externalized to speed up the compilation of your document. By using tikz-externalize, the TiKZ figures will be compiled only once, and the compiled figures will be saved in the output directory. Then, the next time you compile your document, the TiKZ figures will be loaded from the output directory, which is much faster than compiling them in the TeX file. This tutorial shows how to externalize TiKZ figures in your document. Note that this tutorial is only tested on MacOS.

## TeX File Settings

Assume that you set the output directory of your TeX file to `./tmp/`, then you can add the following lines to your TeX file to externalize TiKZ figures.

```latex
\usepackage{tikz}
\usetikzlibrary{external}
\immediate\write18{mkdir -p tmp/tmp/}
\tikzexternalize[
    prefix=tmp/,
    mode=list and make,
]
```

Notice that since the prefix is set to `tmp/`, and the tikz-externalize will generate the related files in `./tmp`. However, in tikz-externalize there exists a step that generates the `md5` hash of the TiKZ figures, and the generation procedure accepts both the output directory and the prefix. Therefore, we need to create a directory `./tmp/tmp/` to store the `md5` hash files. Later, we will write a `latexmkrc` file to move the `md5` hash files to `./tmp/` from `./tmp/tmp`. I really think that this is a bug of tikz-externalize.

Moreover, I used the mode of `list and make`, which works as follows: first it tries to compile the TeX file, and then it generates a `makefile` in the output directory which includes all figures need to be compiled. Then, it runs `make` to compile the TiKZ figures parrallelly, which is much faster than normal mode.

## Make files with LaTeXMK

Save the following code to a file named `.latexmkrc` and put it in the same directory as your TeX file. In the following code, you can modify the number of threads used in the `make` command by changing the number after `-j`. For example, `-j 10` means that 10 threads will be used to compile the figures.

```perl
$clean_ext .= ' %R.figlist %R-figure* %R.makefile fls.tmp';
$latex    = 'internal tikzlatex latex    %B %O %S';
$pdflatex = 'internal tikzlatex pdflatex %B %O %S';
$lualatex = 'internal tikzlatex lualatex %B %O %S';
$xelatex  = 'internal tikzlatex xelatex  %B %O %S';
$hash_calc_ignore_pattern{'pdf'} = '^(/CreationDate|/ModDate|/ID)';
$hash_calc_ignore_pattern{'ps'} = '^%%CreationDate';

sub tikzlatex {
  my ($engine, $base, @args) = @_;
  my $ret = 0;
  print "Tikzlatex: ===Running '$engine @args'...\n";
  $ret = system( $engine, @args );
  print "Tikzlatex: Fixing .fls file ...\n";
  system "echo INPUT \"$aux_dir1$base.figlist\"  >  \"$aux_dir1$base.fls.tmp\"";
  system "echo INPUT \"$aux_dir1$base.makefile\" >> \"$aux_dir1$base.fls.tmp\"";
  system "cat \"$aux_dir1$base.fls\"    >> \"$aux_dir1$base.fls.tmp\"";
  rename "$aux_dir1$base.fls.tmp", "$aux_dir1$base.fls";
  if ($ret) { return $ret; }
  if ( -e "$aux_dir1$base.makefile" ) {
    if ($engine eq 'xelatex') {
      print "Tikzlatex: ---Correcting '$aux_dir1$base.makefile' made under xelatex\n";
      system( 'perl', '-i', '-p', '-e', 's/^\^\^I/\t/', "$aux_dir1$base.makefile" );
    }
    elsif ($engine eq 'latex') {
      print "Tikzlatex: ---Correcting '$aux_dir1$base.makefile' made under latex\n";
      system( 'perl', '-i', '-p', '-e', 's/\.epsi/\.ps/', "$aux_dir1$base.makefile" );
    }
    print "Tikzlatex: ---Running 'make -f $aux_dir1$base.makefile' ...\n";
    if ($aux_dir) {
      system "perl -i -p -e 's#$base.figlist#$aux_dir1$base.figlist#g' $aux_dir1$base.makefile";
      system "cp $aux_dir1$aux_dir1*.md5 $aux_dir1";
      system "rm -rf $aux_dir1$aux_dir1";
      $ret = system "make",  "-j", "10", "-f", "$aux_dir1$base.makefile";
      system "rm $base.run.xml";
    }
    else {
      $ret = system "make",  "-j", "10", "-f", "$base.makefile";
    }
    if ($ret) {
      print "Tikzlatex: !!!!!!!!!!!!!! Error from make !!!!!!!!! \n",
            "  The log files for making the figures '$aux_dir1$base-figure*.log'\n",
            "  may have information\n";
    }
  }
  else {
    print "Tikzlatex: No '$aux_dir1$base.makefile', so I won't run make.\n";
  }
  return $ret;
}
```

## VSCode LaTeX Workshop Settings

Open the `settings.json` file of LaTeX Workshop and add the following lines to the file.

```json
"latex-workshop.latex.outDir": "./tmp",
"latex-workshop.latex.tools": [
    {
        "args": [
            "-synctex=1",
            "-xelatex",
            "-shell-escape",
            "-interaction=nonstopmode",
            "-file-line-error",
            "-outdir=%OUTDIR%",
            "%DOC%"
        ],
        "command": "latexmk",
        "env": {},
        "name": "xelatexmk"
    },
    {
        "args": [
            "-synctex=1",
            "-pdflatex",
            "-shell-escape",
            "-interaction=nonstopmode",
            "-file-line-error",
            "-outdir=%OUTDIR%",
            "%DOC%"
        ],
        "command": "latexmk",
        "env": {},
        "name": "pdflatexmk"
    }
],
```

The most important thing is to add the `-shell-escape` option to the `args` list. This option is used to enable the shell escape mode, which is necessary for tikz-externalize to work.
