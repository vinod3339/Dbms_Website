# Unit II — Relational model and SQL

Study sheet for sessions 13–24. Outcomes: **CO2** and **CO3**.

## Relations

A **relation** is a set of **tuples**. Each **attribute** takes values from a **domain**. Because it is a set, tuple order does not matter and duplicate tuples are not part of the model. A relation instance is the current set of rows.

Running example used below:

**Student**

| sid | name | programme |
| --- | --- | --- |
| 1 | Asha | CSE |
| 2 | Rohan | ECE |
| 3 | Meera | CSE |

**Course**

| cid | title | credits |
| --- | --- | --- |
| C1 | DBMS | 3 |
| C2 | OS | 3 |

**Enroll**

| sid | cid | grade |
| --- | --- | --- |
| 1 | C1 | A |
| 1 | C2 | B |
| 3 | C1 | A |

## Relational algebra

| Operator | Effect |
| --- | --- |
| Selection σ | Keep tuples that satisfy a predicate |
| Projection π | Keep named attributes and remove duplicate tuples |
| Rename ρ | Give a relation or its attributes a new name |
| ∪, ∩, − | Union, intersection, difference of union-compatible relations |
| Join ⋈ | Combine tuples that satisfy a condition |
| Division ÷ | Keep tuples that match every tuple of another relation |

Union-compatible means the same number of attributes and pairwise compatible domains.

Examples on the instance above:

- CSE students: σ programme = CSE (Student)
- Names only: π name (σ programme = CSE (Student)) → Asha, Meera
- Courses Asha took: π title (σ sid = 1 (Enroll) ⋈ Course)
- Students in both a CSE-programme list and an enrolled-student list use intersection after the two sides are projected to the same attributes.

**Rename** is what lets you join a relation to itself. Example pattern: employees and their managers stored in one relation, renamed to two roles.

**Division** answers “for all”. Students who took every course in Course:

π sid, cid (Enroll) ÷ π cid (Course)

On the sample instance the only sid that appears with both C1 and C2 is 1.

Join forms you should name precisely:

- **Theta join** — any comparison between attributes.
- **Equijoin** — the comparison is equality.
- **Natural join** — equality on all shared attribute names, with one copy of those attributes kept.

## Tuple relational calculus

Algebra says how to compute. Tuple calculus says which tuples belong:

{ t | P(t) }

`t` is a tuple variable and `P` is a predicate built from atoms such as `t ∈ Student` and comparisons. A query is **safe** when every value in the answer comes from the active domain of the database, so the result is finite. Domain relational calculus is an additional topic; see the supplementary note.

## Integrity constraints

- **Domain constraint** — every value belongs to the attribute’s domain.
- **Key constraint** — a candidate key identifies at most one tuple. One candidate key is chosen as the primary key.
- **Entity integrity** — the primary key is not null.
- **Referential integrity** — each foreign-key value equals a candidate key in the referenced relation, or is null if the schema allows it.

On the example, `sid` is the primary key of Student, `cid` of Course, and `(sid, cid)` of Enroll. `Enroll.sid` references `Student.sid`. Inserting Enroll `(4, C1, A)` is illegal if student 4 does not exist.

## SQL that matches the algebra

Basic block:

```sql
SELECT name
FROM Student
WHERE programme = 'CSE';
```

Set operations: `UNION`, `INTERSECT`, `EXCEPT`. Duplicates are removed unless you ask for `ALL`.

Aggregates: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`. `COUNT(*)` counts rows. `COUNT(grade)` skips null grades.

`NULL` is unknown. `grade = NULL` is not the test. Use `grade IS NULL`. Comparisons with null produce unknown, and `WHERE` keeps only rows whose predicate is true.

**GROUP BY** forms groups. **HAVING** filters groups after aggregation. **WHERE** filters rows before groups exist.

```sql
SELECT cid, COUNT(*) AS seats
FROM Enroll
GROUP BY cid
HAVING COUNT(*) >= 1;
```

A subquery may appear in `WHERE` or in `FROM`. A correlated subquery mentions an outer row.

**Views** name a query. They do not, by themselves, store a second copy of the rows.

```sql
CREATE VIEW cse_students AS
SELECT sid, name FROM Student WHERE programme = 'CSE';
```

## Outer joins

An inner join drops unmatched tuples. An outer join keeps them and fills the missing side with null.

- **Left** keeps every row of the left table.
- **Right** keeps every row of the right table.
- **Full** keeps both.

Rohan has no enrollment. A left join from Student to Enroll still returns Rohan, with null course columns. PostgreSQL writes `FULL OUTER JOIN`. MySQL does not. Build the full outer result as a union of a left join and a right join, which is what laboratory 3 asks for.

## How a query is usually shaped

1. Choose the relations in `FROM` (algebra: the joins).
2. Filter rows with `WHERE` (selection).
3. Group and filter groups if the question asks for “per course” or “at least two”.
4. Project the columns in `SELECT`.

Query optimization, including pushing selections inward, is an additional topic in the supplementary note.
