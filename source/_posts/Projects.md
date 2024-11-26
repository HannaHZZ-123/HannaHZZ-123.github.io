---
title: Projects
date: 2024-11-25 00:00:01
tags:
academia: true
---

# Projects


### Notes and Solution Manuals for Algebra

During my spare time as a Ph.D. student, I self-studied some classic texts including Rotman's on Algebraic Topology, Fulton's book on Algebraic Curves and Atiyah-MacDonald. I have documented my personal solutions to most of the problems in the latter two books [here](https://github.com/HannaHZZ-123/Algebra).

Also, while reading Atiyah-MacDonald, I feel like despite the fame of the book (it is the book that everyone recommends to me on commutative algebra), it has one major shortcoming that makes it hard to read for beginners like me, that is the lack of motivation from geometric perspective. (Of course, that is because the authors assume the readers are equipped with such knowledge.) So after taking the graduate course on commutative algebra, I decided to collect my [notes](https://github.com/HannaHZZ-123/Algebra) taken in multiple courses and write my own notes based on Atiyah-MacDonald. At the time of the application, I have finished the part on preliminary homological algebra (Though Atiyah-MacDonald does not appeal to results in homological algebra directly, the chapter about modules will be pretty chaotic without the language of homological algebra. Also, there are some exercises that utilize derived functors like $\mathrm{Tor}^i$ and $\varprojlim^i$). I will continue updating the notes afterwards. See the updates [here](/updates)

### Circular Coordinate Computation Using Persistent Cohomology

<div style="text-align: center;">
	<img src="/images/projects/cohom.png" alt="Mil-Mil" style="width: 90%;">
</div>

Course project for CS-6170 Computational Topology, 2024 Spring. This is an implementation of the two papers:

1. [Persistent Cohomology and Circular Coordinates](https://link.springer.com/article/10.1007/s00454-011-9344-x)
2. [Branching and Circular Features in High Dimensional Data](https://dl.acm.org/doi/10.1109/TVCG.2011.177)

Basically, we visualize the branching and looping structure (= computing the homotopy classes in $[X, S^1]$ mathematically) by computing the cohomology group of the simplicial complex. (The key point: $[X, S^1] \cong H^1(X; \mathbb{Z})$)

The code of the project can be seen [here](https://github.com/HansLjy/TDA).