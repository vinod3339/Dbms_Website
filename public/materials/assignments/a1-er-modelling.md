# Assignment 1 — ER modelling for a student-club database

**Unit I · CO1**

Write the answers yourself and submit them as the department instructs. This portal does not collect files.

The CSE department wants a database of student clubs.

- A club has a unique name, a founding year, and exactly one faculty mentor. A mentor has a staff id, a name, and a cabin. A mentor may advise more than one club. Some staff advise no club.
- A student has a unique student id, a name, a programme, and a year of study.
- A student may join many clubs, and a club has many students. The membership records a role (member or lead) and the date the student joined.
- A club organizes events. An event has a date, a venue, and a budget, and it belongs to one club. An event cannot exist without its club. Events of the same club on the same date are distinct, so include an event number that is unique only inside a club.
- Some events have one external speaker. The speaker’s name and affiliation are stored only for those events.

## Questions

1. List the entity sets and the attributes of each. Mark key attributes and any partial key.
2. List the relationship sets. For each one, give the degree, the cardinality, and whether participation of each side is total or partial.
3. Identify any weak entity and its owner.
4. Draw the ER diagram.
5. Map the diagram to relations. Underline primary keys and name each foreign key.
6. One club has no events yet, and one student has joined no club. Point to the participation constraints that allow both facts.

A paragraph that only names entities, with no cardinality, is incomplete.
