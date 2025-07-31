# A TikZ template

This is an empty template for TikZ figures. Save it to a `tmp.tex` file and wirte your TikZ code in the `tikzpicture` environment.

```latex
\documentclass[border=20pt]{standalone}
\usepackage{tikz,tikz-3dplot}
\usepackage{tikzscale}
\usepackage{csvsimple}
\usepackage{bm}
\usepackage{pgfplots}
\usepackage{xcolor}
\pgfplotsset{compat=newest}

% MATLAB colors (lines)
\definecolor{c1}{rgb}{0, 0.4470, 0.7410} % blue
\definecolor{c2}{rgb}{0.8500, 0.3250, 0.0980} % orange
\definecolor{c3}{rgb}{0.9290, 0.6940, 0.1250} % yellow
\definecolor{c4}{rgb}{0.4940, 0.1840, 0.5560} % purple
\definecolor{c5}{rgb}{0.4660, 0.6740, 0.1880} % green
\definecolor{c6}{rgb}{0.3010, 0.7450, 0.9330} % light blue
\definecolor{c7}{rgb}{0.6350, 0.0780, 0.1840} % red

\begin{document}

% 2d plot
\begin{tikzpicture}[scale=1]
    % your code here
\end{tikzpicture}

% 3d plot
\tdplotsetmaincoords{15}{120}
\begin{tikzpicture}[tdplot_main_coords, scale=1]
    % your code here
\end{tikzpicture}

\end{document}
```
