# Practice project — Department seminar series

**CO1, CO2, CO3, CO4**

This is a design exercise for the open-book / assignment examination. It is not an extra credit component, and it has no date until the department announces one. Submit as the department instructs.

## The requirement

The CSE department runs a seminar series.

- A seminar has a title, a date, a room, a seating capacity, and one faculty organizer.
- A speaker may be a faculty member or a guest. A guest has a name and an affiliation. A seminar has one speaker.
- Students register for a seminar. Registration stores the time of registration. A student cannot register twice for the same seminar. Registration closes when the number of registrations reaches the capacity.
- A seminar belongs to one research area. A research area has a name and a short description. Several seminars may share an area.

Invent any further rule you need, and write it down before you draw. Do not leave a constraint only in the diagram.

## What to hand in

1. **Requirements.** Half a page. Include the rules you added.
2. **ER diagram.** Keys, cardinality, participation, and any weak entity.
3. **Relations.** Primary keys underlined. Foreign keys named. Domains for capacity, date, and affiliation.
4. **Dependencies and normal form.** List the functional dependencies you assume. State the normal form of each relation. If one relation is below 3NF, decompose it and argue that the join is lossless.
5. **Ten SQL statements** against your schema:
   - three selections or projections,
   - two joins,
   - one outer join,
   - one `GROUP BY` with `HAVING`,
   - one subquery,
   - one view,
   - one `INSERT` that should be rejected by a key or a foreign key, with the constraint named in a comment.
6. **One transaction.** Registering a student must insert a registration and must not exceed capacity. Describe the two writes and say which ACID property fails if the system crashes between them.

## How it will be read

A complete submission can be checked without asking you what a symbol meant. Names on the diagram match names in the schema. Every foreign key points at a key you actually declared.
