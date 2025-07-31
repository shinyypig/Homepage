# 极大线性无关组与线性空间的基

在学习了线性无关与线性相关的基础上，我们可以进一步学习极大线性无关组，并由此引出线性空间的基这一概念。

## 极大线性无关组

在上一节中，我们指出，给定 $m$ 个 $n$ 维向量 $\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_m$ ，它们张成的子空间维度一定小于等于 $\min(m, n)$。
不妨假设子空间的维度为 $d$，并且尝试从向量组中选择 $k$ 个线性无关的向量，那么问题来了 $k$ 最大为多少呢？首先，我们能确定的是 $k$ 一定大于等于 $d$，因为如果 $k < d$，那么这 $k$ 个向量张成的子空间的维度一定小于 $d$，可能还可以添加新的线性无关的向量。那有没有可能 $k$ 大于 $d$ 呢？答案是不可能，因为如果 $k > d$，那么这 $k$ 个线性无关向量张成的子空间的维度一定大于 $d$，这是不可能的。因此， $k$ 最大的取值为 $d$，此时，我们称这 $d$ 个向量是**极大线性无关组**。需要注意的是，极大线性无关组不一定是唯一的，但是它们的个数一定相同。

这里我们给出一个简单的挑选极大线性无关组的算法：

> 1. 初始化一个空的向量组 $S = \emptyset$，并且令 $k = 0$。
> 1. 从向量组中挑选一个向量 $\boldsymbol{x}_i$，如果 $\boldsymbol{x}_i$ 不能由 $S$ 中的向量表出，那么将 $\boldsymbol{x}_i$ 添加到 $S$ 中，并且令 $k = k + 1$。
> 1. 重复步骤 2，直到向量组中的所有向量都被挑选完毕。

事实上，我们可以发现，当 $k = d$ 时，尽管向量组中可能还有一些向量没有被挑选，但是这些向量一定可以由 $S$ 中的向量表出。因此，如果向量组的秩已知的话，当 $k = d$ 时，我们就可以停止循环了。

## 线性空间的基

在线性代数中，基（basis）是一个线性空间中的一个特殊的子集，基的元素被称为基向量。线性空间中的任意一个元素，都可以唯一地表示成基向量的线性组合。如果基中的元素个数有限，就称线性空间为有限维线性空间，并将基中的元素个数称为线性空间的维度。

对于一个 $N$ 维线性空间 $\mathbb{R}^{N}$ ，其中最简单也是最常用的基有如下的形式：

$$
\mathbf{I} = \begin{bmatrix} \boldsymbol{e}_1 & \boldsymbol{e}_2 & \cdots & \boldsymbol{e}_N \end{bmatrix} = \begin{bmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{bmatrix}.
$$

而矩阵 $\mathbf{I}$ 被称作**单位矩阵**，它是一个 $N \times N$ 的方阵，对角线上的元素全为 $1$，其余元素全为 $0$。$\boldsymbol{e}_i$ 则为一个 $N$ 维的列向量，它的第 $i$ 个元素为 $1$，其余元素为 $0$。

当我们提及一个向量的时候，通常是指这个向量在某个基下的线性表示系数。例如，对于一个 $N$ 维向量 $\boldsymbol{x}$，如果我们使用 $\mathbf{I}$ 作为基，那么 $\boldsymbol{x}$ 在这个基下的坐标就是 $\boldsymbol{x}$ 本身，即

$$
\boldsymbol{x} = \mathbf{I} \boldsymbol{x} = \begin{bmatrix} \boldsymbol{e}_1 & \boldsymbol{e}_2 & \cdots & \boldsymbol{e}_N \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_N \end{bmatrix} = x_1 \boldsymbol{e}_1 + x_2 \boldsymbol{e}_2 + \cdots + x_N \boldsymbol{e}_N.
$$

在没有特别说明的情况下，我们通常默认使用单位矩阵作为基。此时，一个向量与它对应表示系数完全相同，因此很多时候我们会混用这两个概念。比如，在一个二维空间中，如果选取如下的基：

$$
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix},
$$

那么一个向量 $\boldsymbol{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$，对应的表示系数就为 $\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$。但如果选取的基为

$$
\begin{bmatrix} \frac{1}{2} & 0 \\ 0 & 1 \end{bmatrix},
$$

此时，同一个向量 $\boldsymbol{x}$ 对应的表示系数就变为了 $\begin{bmatrix} 2x_1 \\ x_2 \end{bmatrix}$。可以看到，尽管表示系数不同，但是两者表示的是同一个向量。因此，当我们提及一个向量的时候，一定要明确对应的表示系数。

## 二次型

在前面我们介绍过一个向量的长度可以由向量与自身的内积计算得到，即

$$
\|\boldsymbol{x}\|^2 = \langle \boldsymbol{x}, \boldsymbol{x} \rangle = \boldsymbol{x}^{\mathrm{T}} \boldsymbol{x}.
$$

但在上文中，我们同时又明确指出，同一个向量在不同的基下具有不同的表示系数。显然我们并不能用表示系数来计算向量的长度，否则该向量在不同的基下的长度就是不同的，这显然是不合理的。那么，我们应该如何计算一个向量的长度呢？

设有一组基 $\mathbf{B} = \begin{bmatrix} \boldsymbol{b}_1 & \boldsymbol{b}_2 & \cdots & \boldsymbol{b}_N \end{bmatrix} \in \mathbb{R}^{N \times N}$ ，而一个 $N$ 维向量 $\boldsymbol{x}$在这组基下的表示为

$$
\boldsymbol{x} = \mathbf{B} \boldsymbol{v} = \begin{bmatrix} \boldsymbol{b}_1 & \boldsymbol{b}_2 & \cdots & \boldsymbol{b}_N \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_N \end{bmatrix} = v_1 \boldsymbol{b}_1 + v_2 \boldsymbol{b}_2 + \cdots + v_N \boldsymbol{b}_N.
$$

最直接的办法就是通过表示系数和基向量计算出该向量在单位矩阵下的表示系数 $\boldsymbol{x} = \mathbf{B} \boldsymbol{v}$，然后再计算内积从而得到向量的长度。当然，我们也可以用如下的方式来计算向量的长度：

$$
\begin{split}
     \langle \boldsymbol{x}, \boldsymbol{x} \rangle & = \langle \mathbf{B} \boldsymbol{v}, \mathbf{B} \boldsymbol{v} \rangle \\
     & = \langle v_1 \boldsymbol{b}_1 + v_2 \boldsymbol{b}_2 + \cdots + v_N \boldsymbol{b}_N, v_1 \boldsymbol{b}_1 + v_2 \boldsymbol{b}_2 + \cdots + v_N \boldsymbol{b}_N \rangle \\
     & = \sum_{i=1}^N \sum_{j=1}^N v_i v_j \langle \boldsymbol{b}_i, \boldsymbol{b}_j \rangle  \\
     & = \sum_{i=1}^N \sum_{j=1}^N v_i v_j \mathbf{D}_{ij} \\
     & = \boldsymbol{v}^{\mathrm{T}} \mathbf{D} \boldsymbol{v}.
\end{split}
$$

可以发现， 矩阵 $\mathbf{D}$ 是一个仅和基向量有关的矩阵，它的第 $i$ 行第 $j$ 列的元素为$\mathbf{D}_{ij} = \langle \boldsymbol{b}_i, \boldsymbol{b}_j \rangle$。在物理中，$\mathbf{D}$ 被称作**度量矩阵**，它衡量的是一组基自身的特性（长度和夹角）。在获得向量在这组基下的表示系数之后，我们就可以通过 $\boldsymbol{x}^{\mathrm{T}} \mathbf{D} \boldsymbol{x}$ 来计算向量的长度了。此时，我们将 $\boldsymbol{x}^{\mathrm{T}} \mathbf{D} \boldsymbol{x}$ 称作**二次型**，并且将 $\mathbf{D}$ 称作二次型的**系数矩阵**。

显然，对于单位矩阵对应的基，系数矩阵 $\mathbf{D}$ 为同样为一个单位矩阵，即 $\mathbf{D} = \mathbf{I}$。此时，二次型就退化为普通的内积，即

$$
\boldsymbol{x}^{\mathrm{T}} \mathbf{I} \boldsymbol{x} = \langle \boldsymbol{x}, \boldsymbol{x} \rangle = \|\boldsymbol{x}\|^2.
$$

除了单位矩阵对应的基之外，还存在其他的基，使得二次型的系数矩阵为一个单位矩阵，只需要满足如下两个条件即可

$$
\begin{split}
    \langle \boldsymbol{b}_i, \boldsymbol{b}_j \rangle & = 0, \quad i \neq j \\
    \langle \boldsymbol{b}_i, \boldsymbol{b}_i \rangle & = 1.
\end{split}
$$

换句话说就是，基向量长度为 1，且互相正交。这样的一组基由被称作**标准正交基**。

## 习题

设有一组基 $\mathbf{B}$和两个向量在这组基下的表示系数 $\boldsymbol{v}_1, \boldsymbol{v}_2$ ，求这两个向量的之间的夹角。
