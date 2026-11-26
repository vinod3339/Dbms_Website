# Supplementary topics

The syllabus has four units. This note covers additional topics named in the handout for Units II and III. Object-relational databases are taught in Unit I, session 12, and are not repeated here.

## Domain relational calculus

Tuple calculus uses variables that stand for whole tuples. **Domain relational calculus** uses variables that stand for single domain values.

A query has the shape

{ ⟨x1, x2, …, xn⟩ | P(x1, x2, …, xn) }

P is a predicate. Atoms compare variables, or say that a list of variables forms a tuple of a named relation.

On Student(sid, name, programme), the names of CSE students:

{ ⟨n⟩ | ∃s (Student(s, n, 'CSE')) }

The same question in tuple calculus binds one tuple variable and reads its name attribute. The difference to state in an answer is what the variable ranges over: a tuple, or a domain value. Safety means the same thing as in tuple calculus: the answer must be finite and drawn from values that actually appear.

## Query optimization

The algebra of a query can be rewritten into other expressions with the same result. The optimizer searches those expressions because some of them touch less data.

Rules worth remembering:

- **Selection pushdown** — apply σ as early as possible, before a join, when the predicate uses only one side.
- **Projection pushdown** — drop attributes a later operator does not need, once keys required for the join are kept.
- **Combine selections** — σA(σB(R)) is σA AND B(R).
- Join order changes the size of intermediate results even when the final result is the same.

Optimization does not change the answer. It changes the plan. Index choice (Unit IV) is one input to that plan: a selection on an indexed column need not scan the file.

## E. F. Codd’s rules

Codd published twelve rules, plus a foundation rule, that say how far a product is a relational DBMS. You are not asked to implement them. You should be able to connect a rule to an idea already in the course.

| Rule | Idea already in the course |
| --- | --- |
| Information rule | All data is represented in relations, including metadata in the catalog |
| Guaranteed access | A value is reached by table, key, and column |
| Systematic treatment of nulls | NULL is distinct from every domain value (Unit II) |
| Catalog | The description of the database is stored in relations |
| Data language | One language covers definition, queries, constraints, and authorization |
| Views | Updatable views when the theory allows it (views in Unit II) |
| High-level insert, update, delete | Sets of tuples, not one record at a time |
| Physical data independence | Unit I architecture |
| Logical data independence | Unit I architecture |
| Integrity independence | Keys and constraints are in the catalog, not only in applications |
| Distribution independence | Users do not write navigation for where a fragment is stored |
| Non-subversion | A lower-level interface cannot bypass the constraints |

If a question asks for “three rules related to this course”, physical independence, logical independence, and integrity independence are the cleanest three.

## Domain dependency

A **domain** is the set of legal values of an attribute. A **domain constraint** (domain restriction) limits an attribute to that set: credits are positive integers, a grade is one of a listed codes, a date is a real calendar date.

A **functional dependency** is different. It links attributes to each other (sid → programme). A domain constraint can be checked by looking at one value. A functional dependency needs two tuples, or the key machinery from Unit III, before you can say it holds.

When the handout pairs “domain dependency” with normalization, separate the two in your answer:

- Domain constraints reject illegal values.
- Functional dependencies drive normal forms.
- Both are integrity constraints. They are not the same constraint.
