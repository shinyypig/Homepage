# 线性相关与线性方程组的解

在上一节中我们简单介绍了向量线性组合的几何意义，在本小节我们将进一步了解一个重要的概念，即线性相关。

# 线性子空间

从中我们可以发现，给定两个三维的向量，它们的所有可能的线性组合构成了一个平面，或者说这两个向量**张成的子空间**。但是也有一种特殊的情况，就是当这两个向量共线时，它们张成的子空间一条直线。而无论平面还是直线，它们都是完整的三维空间的一个子集，并且这个子集同样也是一个线性空间，通常我们称之为**线性子空间**。

此外，三维空间中的平面是一个二维的线性子空间，而一条直线则是一个一维的线性子空间。为了方便起见，我们用如下的符号来表示向量张成的子空间

$$
\operatorname{span}(\boldsymbol{x}_1,\boldsymbol{x}_2,...,\boldsymbol{x}_n).
$$

当我们将这 $n$ 个向量写成矩阵的形式时

$$
\mathbf{X} = \begin{bmatrix}
    \boldsymbol{x}_1 & \boldsymbol{x}_2 & \cdots & \boldsymbol{x}_n
\end{bmatrix},
$$

我们可以用 $\operatorname{span}(\mathbf{X})$ 来表示 $\mathbf{X}$ 的列向量张成的线性子空间。此外，我们可以用如下的符号来表示向量张成的线性子空间的维度

$$
\operatorname{dim}(\operatorname{span}(\mathbf{X})).
$$

显而易见的是，对于 $n$ 个 $m$ 维向量张成的线性子空间，其中的元素一定可以由这 $n$ 个向量线性表示，即

$$
\operatorname{span}(\boldsymbol{x}_1,\boldsymbol{x}_2,...,\boldsymbol{x}_n) = \left\{ \sum_{i=1}^{n} v_i \boldsymbol{x}_i \mid v_i \in \mathbb{R} \right\}.
$$

由于组合系数 $\boldsymbol{v} = \begin{bmatrix} v_1 & v_2 & \cdots & v_n \end{bmatrix}$ 共有 $n$ 个元素，因此向量张成的线性子空间的维度最大只能为 $n$。并且，当 $n > m$ 时，即向量的个数大于本身向量所处的空间的维度，这 $n$ 个向量张成的线性子空间的维度是不可能超过 $m$ 的。因此 $n$ 个 $m$ 维向量张成的线性子空间的维度最大为 $\min(m, n)$。

比如说，三维空间中的两个向量张成的空间最多是一个平面，因此维度最多为 $\min(3, 2) = 2$。而三维空间中的四个向量，无论怎样线性组合都不可能得到四维空间中的向量，因此维度最多为 $\min(3, 4) = 3$。

与此同时，在最极端的情况下，所有的向量都是零向量（零向量指的是元素全部为 $0$ 的向量，通常用 $\boldsymbol{0}$ 来表示；非零向量则是指至少有一个元素不为 $0$ 的向量），此时这 $n$ 个零向量张成的线性子空间只有坐标系原点这一个点，维度为 0。所以对于多个向量张成的线性子空间，我们有如下的结论：

> 给定 $n$ 个非零向量 $\mathbf{X} = \begin{bmatrix} \boldsymbol{x}_1 & \boldsymbol{x}_2 & \cdots & \boldsymbol{x}_n \end{bmatrix} \in \mathbb{R}^{m \times n}$，它们张成的线性子空间的维度最大为 $\min(m, n)$，最小为 $0$，即
>
> $$
> 0 \leq \operatorname{dim}(\operatorname{span}(\mathbf{X})) \leq \min(m, n).
> $$

进一步地， $\operatorname{dim}(\operatorname{span}(\mathbf{X}))$ 被称作矩阵 $\mathbf{X}$ 的**列秩**，通记作 $\operatorname{rank}(\mathbf{X})$。换句话说，矩阵的列秩指的是矩阵的列向量张成的线性子空间的维度。同理，矩阵的**行秩**指的就是矩阵的行向量张成的线性子空间的维度。事实上，我们可以证明矩阵的列秩和行秩是相等的，因此通常我们并不关心究竟是行秩还是列秩，而只是简单地称之为**矩阵的秩**，记作 $\operatorname{rank}(\mathbf{X})$。

至于如何证明矩阵的列秩和行秩是相等的，这将在后面的章节中详细介绍。

## 线性相关与线性无关

在熟悉了向量张成的子空间的维度之后，线性相关于线性无关就很容易理解了。给定 $n$ 个向量 $\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_n$，如果这 $n$ 个向量张成的线性子空间的维度小于 $n$，即

$$
\operatorname{dim}(\operatorname{span}(\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_n)) < n,
$$

那么我们就称这 $n$ 个向量是**线性相关**的。反之，如果这 $n$ 个向量张成的线性子空间的维度等于 $n$，即

$$
\operatorname{dim}(\operatorname{span}(\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_n)) = n,
$$

那么我们就称这 $n$ 个向量是**线性无关**的。

在更多的书籍中，线性相关与线性无关的定义如下：

> 给定 $n$ 个向量 $\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_n$，如果存在不全为 $0$ 的系数 $v_1, v_2, \cdots, v_n$，使得
>
> $$
> v_1 \boldsymbol{x}_1 + v_2 \boldsymbol{x}_2 + \cdots + v_n \boldsymbol{x}_n = \boldsymbol{0},
> $$
>
> 那么我们就称这 $n$ 个向量是**线性相关**的。反之，如果 $v_1, v_2, \cdots, v_n$ 只能全为 $0$，那么我们就称这 $n$ 个向量是**线性无关**的。

上面这个定义更具体的来说就是判断这一组向量中是否存在某个向量能被其余向量线性表示。如果能的话，那么这一组向量就是线性相关的；反之，如果不能的话，那么这一组向量就是线性无关的。

这与我们之前的定义是等价的。因为，如果存在某个向量能被其余向量线性表示，那么这个向量就一定被包含在其余向量张成的子空间中，因此当引入这个向量时，所有向量张成的子空间的维度不会发生变化，此时一定有 $\operatorname{dim}(\operatorname{span}(\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_n)) < n$，即这一组向量是线性相关的。反之，没有任何一个向量可以由剩余的向量线性表示，那么每引入一个向量，已有的向量张成的子空间就会增加一个维度，因此当引入第 $n$ 个向量时，所有向量张成的子空间的维度一定为 $n$，即这一组向量是线性无关的。

特别需要注意的是零向量，尽管不影响最终的结论，但具体的判断过程有细微的不同，这里不再赘述。进一步地，我们有如下定理：

> 对于一组线性无关的向量 $\mathbf{X} = \begin{bmatrix} \boldsymbol{x}_1 & \boldsymbol{x}_2 & \cdots & \boldsymbol{x}_n \end{bmatrix}$，以及一个可以被这组向量线性表示的向量 $\boldsymbol{y}$，对应的表示系数是唯一的。
>
> **证明：** 设有两个不同的表示系数$\boldsymbol{v}_1, \boldsymbol{v}_2$
>
> $$
> \mathbf{X} \boldsymbol{v}_1 = \mathbf{X} \boldsymbol{v}_2 = \boldsymbol{y}.
> $$
>
> 那么我们有
>
> $$
> \mathbf{X} (\boldsymbol{v}_1 - \boldsymbol{v}_2) = \boldsymbol{0}.
> $$
>
> 又因为 $\mathbf{X}$ 的列向量是线性无关的，因此$\boldsymbol{v}_1 - \boldsymbol{v}_2 = \boldsymbol{0}$，即 $\boldsymbol{v}_1 = \boldsymbol{v}_2$。

类似地，我们还有如下定理

> 对于一组线性相关的向量 $\mathbf{X} = \begin{bmatrix} \boldsymbol{x}_1 & \boldsymbol{x}_2 & \cdots & \boldsymbol{x}_n \end{bmatrix}$，以及一个可以被这组向量线性表示的向量 $\boldsymbol{y}$，对应的表示向量有无穷多个。

## 线性方程组解的个数

线性方程组想来大家都不陌生，它是由一系列的线性方程组成的方程组，每个线性方程都是由一系列的变量和常数构成的等式，比如说

$$
\begin{cases}
    2x_1 + 3x_2 + 4x_3 = 9 \\
    3x_1 + 4x_2 + 5x_3 = 12 \\
    4x_1 + 5x_2 + 6x_3 = 15
\end{cases}.
$$

该方程组的解为 $\begin{bmatrix} x_1 & x_2 & x_3 \end{bmatrix} = \begin{bmatrix} 1 & 1 & 1 \end{bmatrix}$。但这只是一种特殊情况，一般来说，线性方程组的解并不一定存在，也可能存在无穷多个解。那么我们如何判断一个线性方程组是否有解？如果有解的话，解的个数又是多少呢？

给定一个 $n$ 个未知数 $m$ 个方程的线性方程组

$$
\begin{cases}
    a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = b_1 \\
    a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = b_2 \\
    \vdots \\
    a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n = b_m
\end{cases},
$$

如果令矩阵

$$
\mathbf{A} = \begin{bmatrix} \boldsymbol{a}_1 & \boldsymbol{a}_2 & \cdots & \boldsymbol{a}_n \end{bmatrix} \in \mathbb{R}^{m \times n},
$$

其中 $\boldsymbol{a}_i = \begin{bmatrix} a_{1i} & a_{2i} & \cdots & a_{mi} \end{bmatrix}^{\top}$，令向量 $\boldsymbol{x},\boldsymbol{b}$ 为

$$
\boldsymbol{x} = \begin{bmatrix} x_1 & x_2 & \cdots & x_n \end{bmatrix}^{\top} \in \mathbb{R}^{n \times 1}, \quad \boldsymbol{b} = \begin{bmatrix} b_1 & b_2 & \cdots & b_m \end{bmatrix}^{\top} \in \mathbb{R}^{m \times 1},
$$

那么该线性方程组可以写成

$$
\mathbf{A} \boldsymbol{x} = \boldsymbol{b}.
$$

而根据上文的介绍，我们知道这个等式从几何上来说实际上是对矩阵 $\mathbf{A}$ 的列向量进行线性组合，希望能找到一组系数 $\boldsymbol{x}$，使得线性组合的结果等于向量 $\boldsymbol{b}$。因此，如果 $\boldsymbol{b}$ 能被 $\mathbf{A}$ 的列向量线性表示，那么这个线性方程组就有解，反之则无解。

记

$$
    \begin{split}
        \operatorname{dim}(\operatorname{span}(\mathbf{A})) & = d_A, \\
        \operatorname{dim}(\operatorname{span}(\mathbf{A}, \boldsymbol{b})) &= d_{A, b}.
    \end{split}
$$

如果， $d_{A,b} = d_A + 1$，则意味着向量 $\boldsymbol{b}$ 不能被 $\mathbf{A}$ 的列向量线性表示，因此这个线性方程组无解。反之，如果 $d_{A,b} = d_A$，则意味着向量 $\boldsymbol{b}$ 能被 $\mathbf{A}$ 的列向量线性表示，因此这个线性方程组有解。在有解的情况下，如果 $d_A = n$，也就说矩阵 $\mathbf{A}$ 的列向量是线性无关的，此时解是唯一的。如果 $d_A < n$，也就是说矩阵 $\mathbf{A}$ 的列向量是线性相关的，此时解是无穷多个的。

至于如何快速判断一个矩阵的列向量是否线性相关，以及如何计算线性方程组的解，在后面的章节中将进行详细介绍。

## 小结

本节从几何的角度介绍了向量张成的线性子空间的概念，以及线性相关与线性无关的概念。并且，我们还介绍了如何基于线性相关于线性无关来判断线性方程组解的个数的方法。

> 给定一个 $n$ 个未知数 $m$ 个方程的线性方程组
>
> $$
> \mathbf{A} \boldsymbol{x}=\boldsymbol{y}
> $$
>
> 方程组的解的个数可以根据如下的规则进行判断：
>
> $$
> \begin{cases}
>  d_{A, b}=d_{A}+1 & \text { 无解 } \\
>  d_{A, b}=d_{A} \operatorname{and} d_A = n & \text { 唯一解 } \\
>  d_{A, b}=d_{A} \operatorname{and} d_A < n & \text { 无穷多解 }
> \end{cases}
> $$
