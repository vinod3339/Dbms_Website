# Unit III — Normalization and transactions

Study sheet for sessions 25–36. Outcomes: **CO4** and **CO5**.

## Why schemas are refined

A relation that repeats a fact causes three anomalies.

- **Update anomaly** — the same fact must be changed in several rows, and a missed row leaves the database inconsistent.
- **Insertion anomaly** — a fact cannot be stored until some other, unrelated fact exists.
- **Deletion anomaly** — removing the last row that mentions one fact also deletes a different fact.

Example shape: `(sid, name, cid, title, grade)` repeats the course title on every enrollment. Changing a title means updating many rows. A new course with no students has nowhere to live. Deleting the last enrollment of a course can delete the title.

## Decomposition

A decomposition replaces one relation with two or more. Two properties matter.

- **Lossless join** — the natural join of the pieces equals the original relation. If it does not, the join invents tuples that were never stored. That decomposition is lossy.
- **Dependency preservation** — every functional dependency can be checked inside one of the pieces, without joining them back first.

A decomposition can be lossless and still fail to preserve a dependency, or the other way around. State both when you justify a design.

## Functional dependencies

`X → Y` means that any two tuples that agree on all attributes in `X` also agree on all attributes in `Y`.

Armstrong’s axioms produce the **closure** of a set of dependencies:

- **Reflexivity** — if Y is a subset of X, then X → Y.
- **Augmentation** — if X → Y, then XZ → YZ.
- **Transitivity** — if X → Y and Y → Z, then X → Z.

You do not list the entire closure on paper for large sets. You compute **attribute closure** instead.

### Attribute closure

To compute X⁺:

1. Start with X⁺ = X.
2. If a dependency’s left side is already inside X⁺, add its right side.
3. Repeat until nothing new is added.

If X⁺ contains every attribute of the relation, X is a **superkey**. A **candidate key** is a superkey from which no attribute can be removed without losing that property. Attributes that appear in some candidate key are **prime**. The others are non-prime.

Worked example. R(A, B, C, D) with F = { A → B, B → C, A → D }.

- A⁺ starts as {A}. A → B adds B. B → C adds C. A → D adds D. A⁺ = {A, B, C, D}. A is a key.
- B⁺ = {B, C}. B is not a key.

## Normal forms

| Form | Requirement |
| --- | --- |
| 1NF | Every attribute value is atomic. No repeating groups inside a cell. |
| 2NF | 1NF, and no non-prime attribute depends on a proper subset of a candidate key. |
| 3NF | 2NF, and no non-prime attribute depends transitively on a candidate key. For every non-trivial X → A, X is a superkey or A is prime. |
| BCNF | For every non-trivial X → Y, X is a superkey. |
| 4NF | For every non-trivial multivalued dependency X ↠ Y, X is a superkey. |
| 5NF | Every non-trivial join dependency is implied by the candidate keys. |

BCNF is stricter than 3NF. A relation can be in 3NF and still have a dependency whose left side is not a superkey, when the right side is prime. BCNF forbids that case. Some 3NF designs are kept because a BCNF split would not preserve a dependency. Say so if you stop at 3NF.

**Partial dependency** (the 2NF target): a non-prime attribute depends on part of a composite key. In EnrollExam(sid, cid, exam, grade, title) with key (sid, cid, exam), if cid → title, title depends on part of the key.

**Transitive dependency** (the 3NF target): key → some attribute → another non-prime attribute. StudentDept(sid, programme, building) with sid → programme and programme → building: building depends on sid only through programme.

### Multivalued and join dependencies

A **multivalued dependency** X ↠ Y holds when the set of Y values paired with X is independent of the other attributes. Classic pattern: an employee has many skills and many dependents, and the two sets do not determine each other. Storing both in one relation repeats every skill with every dependent. **4NF** separates them.

A **join dependency** generalizes this to three or more projections: the relation equals the join of those projections. **5NF** decomposes when that dependency is not implied by the candidate keys. If you cannot show a join dependency, do not claim the relation needs 5NF.

## Transactions

A **transaction** is one logical unit of work. Either its effects remain, or none of them do.

| Property | Meaning | Supported mainly by |
| --- | --- | --- |
| Atomicity | All of the transaction or none of it | Recovery |
| Consistency | A correct transaction takes one consistent state to another | Constraints, and the transaction itself |
| Isolation | Concurrent transactions do not see each other’s half-finished work | Concurrency control |
| Durability | Committed results survive failures | Recovery, the log |

### States

Active → partially committed → committed, or active → failed → aborted. A committed transaction is not rolled back as part of ordinary processing.

### Schedules and conflicts

A **schedule** orders the operations of several transactions. A **serial schedule** finishes one transaction before starting the next. A **concurrent schedule** interleaves them.

Two operations **conflict** when they belong to different transactions, use the same data item, and at least one is a write.

- **WR (read-after-write)** — one transaction reads what the other wrote.
- **RW (write-after-read)** — one transaction writes an item the other already read.
- **WW (write-after-write)** — both write the same item.

### Conflict serializability

Build a precedence graph. Nodes are transactions. Draw Ti → Tj when an operation of Ti precedes and conflicts with an operation of Tj. The schedule is **conflict serializable** when the graph has no cycle. A serial order is any topological order of that graph.

Example with a cycle. T1 reads and writes A, then later reads B. T2 reads A after T1’s write and writes B before T1 reads B.

- T1’s write of A precedes T2’s read of A → edge T1 → T2
- T2’s write of B precedes T1’s read of B → edge T2 → T1

The cycle means the schedule is not conflict serializable.

### View serializability

Two schedules are view equivalent when:

- they contain the same operations,
- each read sees the value produced by the same write (the reads-from relation matches),
- the transaction that performs the final write on each item is the same.

A schedule is view serializable when it is view equivalent to some serial schedule. Conflict serializability implies view serializability. The converse is not always true. In this course, test conflict serializability with the graph, and use the view definition when the question names it.

E. F. Codd’s rules and domain dependency are additional topics in the supplementary note.
