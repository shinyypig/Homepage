---
title: 最小二乘目标函数为凸函数
date: 2023-05-01
---

# 最小二乘目标函数为凸函数

证明：

$$
\left\|\mathbf{M} \left(\frac{\boldsymbol{s}_1 + \boldsymbol{s}_2}{2}\right) - \boldsymbol{c}\right\|_2^2 \leq \frac{\|\mathbf{M} \boldsymbol{s}_1 - \boldsymbol{c}\|_2^2 + \|\mathbf{M} \boldsymbol{s}_2 - \boldsymbol{c}\|_2^2}{2}.
$$

注意到

$$
\begin{split}
        \left\|\mathbf{M} \left(\frac{\boldsymbol{s}_1 + \boldsymbol{s}_2}{2}\right) - \boldsymbol{c}\right\|_2^2 &= \left(\mathbf{M} \left(\frac{\boldsymbol{s}_1 + \boldsymbol{s}_2}{2}\right) - \boldsymbol{c}\right)^{\mathrm{T}} \left(\mathbf{M} \left(\frac{\boldsymbol{s}_1 + \boldsymbol{s}_2}{2}\right) - \boldsymbol{c}\right) \\
        &= \left(\frac{\mathbf{M} \boldsymbol{s}_1 + \mathbf{M} \boldsymbol{s}_2}{2} - \boldsymbol{c}\right)^{\mathrm{T}} \left(\frac{\mathbf{M} \boldsymbol{s}_1 + \mathbf{M} \boldsymbol{s}_2}{2} - \boldsymbol{c}\right) \\
        &= \frac{1}{4} \boldsymbol{s}_1 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_1 + \frac{1}{4} \boldsymbol{s}_2 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_2 + \frac{1}{2} \boldsymbol{s}_1 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_2 - (\boldsymbol{s}_1 + \boldsymbol{s}_2)^{\mathrm{T}} \mathbf{M}^{\mathrm{T}} \boldsymbol{c} + \boldsymbol{c}^{\mathrm{T}} \boldsymbol{c} \\
\end{split}
$$

而

$$
\begin{split}
        \|\mathbf{M} \boldsymbol{s}_1 - \boldsymbol{c}\|_2^2  + \|\mathbf{M} \boldsymbol{s}_2 - \boldsymbol{c}\|_2^2 &= (\mathbf{M} \boldsymbol{s}_1 - \boldsymbol{c})^{\mathrm{T}} (\mathbf{M} \boldsymbol{s}_1 - \boldsymbol{c}) + (\mathbf{M} \boldsymbol{s}_2 - \boldsymbol{c})^{\mathrm{T}} (\mathbf{M} \boldsymbol{s}_2 - \boldsymbol{c}) \\
        &= \boldsymbol{s}_1 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_1 + \boldsymbol{s}_2 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_2 - 2 \boldsymbol{s}_1^{\mathrm{T}} \mathbf{M}^{\mathrm{T}} \boldsymbol{c} - 2 \boldsymbol{s}_2^{\mathrm{T}} \mathbf{M}^{\mathrm{T}} \boldsymbol{c} + 2 \boldsymbol{c}^{\mathrm{T}} \boldsymbol{c}.
\end{split}
$$

因此只需证明

$$
\begin{split}
        & \frac{1}{4} \boldsymbol{s}_1 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_1 + \frac{1}{4} \boldsymbol{s}_2 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_2 + \frac{1}{2} \boldsymbol{s}_1 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_2 - (\boldsymbol{s}_1 + \boldsymbol{s}_2)^{\mathrm{T}} \mathbf{M}^{\mathrm{T}} \boldsymbol{c} + \boldsymbol{c}^{\mathrm{T}} \boldsymbol{c} \\
        \leq & \frac{1}{2}\boldsymbol{s}_1 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_1 + \frac{1}{2} \boldsymbol{s}_2 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_2 - \boldsymbol{s}_1^{\mathrm{T}} \mathbf{M}^{\mathrm{T}} \boldsymbol{c} - \boldsymbol{s}_2^{\mathrm{T}} \mathbf{M}^{\mathrm{T}} \boldsymbol{c} + \boldsymbol{c}^{\mathrm{T}} \boldsymbol{c}.
\end{split}
$$

消除公共项，只需证明

$$
\begin{split}
        \frac{1}{4} \boldsymbol{s}_1 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_1 + \frac{1}{4} \boldsymbol{s}_2 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_2 - \frac{1}{2} \boldsymbol{s}_1 \mathbf{M}^{\mathrm{T}} \mathbf{M} \boldsymbol{s}_2
        \geq 0.
\end{split}
$$

上面的不等式可以写成

$$
    (\boldsymbol{s}_1 - \boldsymbol{s}_2)^{\mathrm{T}} \mathbf{M}^{\mathrm{T}} \mathbf{M} (\boldsymbol{s}_1 - \boldsymbol{s}_2)  \geq 0.
$$

也即

$$
    \left( \mathbf{M} (\boldsymbol{s}_1 -\boldsymbol{s}_2)\right)^{\mathrm{T}} \left( \mathbf{M} (\boldsymbol{s}_1 -\boldsymbol{s}_2)\right)  \geq 0.
$$

得证。
