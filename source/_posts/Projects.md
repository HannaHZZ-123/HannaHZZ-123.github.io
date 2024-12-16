---
title: Projects
date: 2024-11-25 00:00:01
tags:
academia: true
---

# Projects


### Notes and Solution Manuals for Algebra

During my spare time as a Ph.D. student, I self-studied some classic texts including Rotman's on Algebraic Topology, Fulton's book on Algebraic Curves and Atiyah-MacDonald. I have documented my personal solutions to most of the problems in the latter two books [here](https://github.com/HannaHZZ-123/Algebra), see [here](/updates) for the PDF version. Besides, I intended to merge my notes taken during the algebra courses and self-studies into a single one. It is an on-going project and my updates on the note can be found [here](/updates).

### Circular Coordinate Computation Using Persistent Cohomology

<div style="text-align: center;">
	<img src="/images/projects/cohom.png" alt="Mil-Mil" style="width: 90%;">
</div>

Course project for CS-6170 Computational Topology, 2024 Spring. This is an implementation of the two papers:

1. [Persistent Cohomology and Circular Coordinates](https://link.springer.com/article/10.1007/s00454-011-9344-x)
2. [Branching and Circular Features in High Dimensional Data](https://dl.acm.org/doi/10.1109/TVCG.2011.177)

Basically, we visualize the branching and looping structure (= computing the homotopy classes in $[X, S^1]$ mathematically) by computing the cohomology group of the simplicial complex. (The key point: $[X, S^1] \cong H^1(X; \mathbb{Z})$)

The code of the project can be seen [here](https://github.com/HansLjy/TDA).

### Tensor-Matrix-Diff

Tensor-Matrix-Diff(TMD) is a symbolic differentiation system. Unlike the Symbolic Math Toolbox of MATLAB which calculates the derivatives of a tensor function in an **element-by-element** sense, TMD aims to calculate the derivatives while treating **matrices** as the minimum unit of operation.

The project may not be of great interest for math people, but it may be helpful for graphics engineers, as they usually have to deal with very complex matrix differentiation. Here is an example result: the partial derivative of 2D gaussian function to the variance:

<div style="text-align: center;">
	<img src="/images/projects/tmd.png" alt="Mil-Mil" style="width: 90%;">
</div>

The code of the project can be seen [here](https://github.com/HansLjy/Tensor-Matrix-Diff).
