# Assignment 4 — Normalization, schedules, and serializability

**Unit III · CO4 and CO5**

Submit as the department instructs.

## Part A — Dependencies and normal forms

Relation `R(A, B, C, D, E)` with

`F = { A → B,  BC → D,  D → E,  E → A }`

1. Compute `A⁺`, `BC⁺`, and `D⁺`. Show each attribute as you add it.
2. List the candidate keys. A key must be minimal.
3. Consider `S(student_id, programme, building, course_id, grade)` with
   - `student_id → programme`
   - `programme → building`
   - `(student_id, course_id) → grade`
   and candidate key `(student_id, course_id)`.
   Which normal form does `S` fail, and which dependency is the reason? Decompose `S` into relations that are in 3NF. Underline keys and say whether your decomposition is lossless.
4. Give one relation and one multivalued dependency for which a single table stores two independent lists. Name the normal form that decomposition is aiming at. You do not need to reach 5NF unless the dependency you chose is a join dependency.

## Part B — Schedules

Two transactions:

- T1: `r1(X)  w1(X)  r1(Y)  w1(Y)`
- T2: `r2(X)  w2(Y)`

Schedule S:

`r1(X)  r2(X)  w1(X)  w2(Y)  r1(Y)  w1(Y)`

5. List every conflicting pair in S. Label each pair RW, WR, or WW.
6. Draw the precedence graph and decide whether S is conflict serializable. If it is, give one serial order. If it is not, name the cycle.
7. State which ACID property fails for a user who reads Y after `w2(Y)` if T2 later aborts, and name the locking rule that avoids that read.
