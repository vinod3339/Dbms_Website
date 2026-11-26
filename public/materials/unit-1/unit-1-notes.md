# Unit I — Introduction to DBMS and the ER model

Study sheet for sessions 1–12. Outcome: **CO1**.

## DBMS and file systems

A database is a collection of related data shared by applications. A database management system defines the structure, stores the data, answers queries, and controls concurrent use.

In a file-processing setup, each program owns its files. The same fact, such as a student address, is copied into several files. A change in record layout forces every program that reads the file to change. Integrity rules live inside application code, so two programs can disagree. Concurrent writes can lose an update, and a crash can leave a file half-written.

A DBMS keeps one catalog (the data dictionary), enforces constraints, and recovers a consistent state after failure.

## Schema, instance, and states

The **schema** is the description of the structure. The **instance** is the data at one moment. An empty database is a valid instance of the schema. Loading rows produces the initial populated state. Later updates produce new states. Users see one state at a time; the DBMS is responsible for moving from one consistent state to the next.

## Architecture and data independence

Three levels are enough for this course:

| Level | What it describes |
| --- | --- |
| View (external) | The slice one application or user group sees |
| Logical (conceptual) | Entities, relationships, and constraints for the whole database |
| Physical (internal) | Files, indexes, and placement on storage |

**Physical data independence:** change the internal level (a new index, a different file layout) without rewriting logical queries.

**Logical data independence:** add a column or a table at the logical level while existing views stay valid.

## Users and the DBA

- **Naive users** work through forms and applications.
- **Application programmers** embed queries in programs.
- **Sophisticated users** write queries directly.
- The **database administrator** defines the schema, grants privileges, tunes storage, and manages backup.

## System structure

Keep two blocks in mind.

- The **query processor** parses SQL, rewrites it, and chooses a plan.
- The **storage manager** handles files, buffers, and indexes. The **transaction manager** beside it deals with concurrency and recovery (Units III and IV).

## Data models

| Model | How data is organized | How you ask |
| --- | --- | --- |
| ER | Entities and relationships, used while designing | Diagram, then map to tables |
| Relational | Relations (tables) of tuples | Algebra, calculus, or SQL |
| Hierarchical | Trees of parent and child records | Navigation along the tree |
| Network | A graph of record types | Navigation along links |
| Object-oriented | Objects with identity and inheritance | Methods and object queries |

The course designs in the ER model and stores data in the relational model. Hierarchical and network models are comparison points: the query follows links instead of naming the result.

## ER constructs

An **entity** is a distinguishable thing. An **entity set** groups entities of one type.

Attribute kinds:

- **Simple** — one value, such as `year`.
- **Composite** — built from parts, such as a name made of given name and family name.
- **Multivalued** — several values, such as phone numbers.
- **Derived** — computed, such as age from date of birth.
- **Key** — identifies one entity inside the set.

A **relationship set** links entity sets. State the **degree** (usually binary), the **cardinality** (1:1, 1:N, or M:N), and **participation**. Total participation means every entity takes part. Partial participation means some entities do not.

A **weak entity** has no key of its own. It is identified by its owner plus a partial key. Example: a section of a course, identified by section number together with the course.

## Design process

1. Collect requirements in words.
2. Mark entity sets, attributes, and keys.
3. Mark relationships, cardinality, and participation.
4. Draw the ER diagram and check it against the requirements.
5. Map to relations (Unit II), then refine with normalization (Unit III).

### Mapping sketch

Student and Course with a many-to-many relationship **Enrolls**, attribute `grade`:

- `Student(student_id, name, programme)`
- `Course(course_id, title, credits)`
- `Enrolls(student_id, course_id, grade)`

The relationship becomes a relation whose key is the pair of participating keys. A one-to-many relationship can instead place the foreign key on the “many” side.

## Object-relational model

An object-relational system keeps tables and adds structured types, references, and inheritance. It is the additional topic for this unit: relational storage, with some object features, rather than a separate object database.

## Applications

Bank ledgers, university registration, travel reservations, hospital records, and shop inventories are the settings to cite. Each needs shared data, constraints, and concurrent users. That is the reason the file-system comparison matters.
