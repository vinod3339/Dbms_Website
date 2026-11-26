# Unit IV — Locking, recovery, indexing, and kinds of data

Study sheet for sessions 37–47. Outcomes: **CO5** and **CO6**. The handout allocates 12 hours to this unit and numbers the sessions 37–47.

## Locks

A **shared** lock (S) allows a read. An **exclusive** lock (X) is required to write. Compatibility:

| Held \ Requested | S | X |
| --- | --- | --- |
| S | yes | no |
| X | no | no |

The lock manager grants a compatible request and makes any other request wait. A careful schedule still needs a protocol. Locking without a protocol can deadlock or can fail to be serializable.

## Two-phase locking

**Two-phase locking (2PL):** a transaction acquires locks in a growing phase and releases them in a shrinking phase. After the first unlock, it requests no new lock. Schedules that follow 2PL are conflict serializable.

**Strict 2PL:** exclusive locks are held until the transaction commits or aborts. That prevents other transactions from reading a value that might still be rolled back, so aborts do not cascade.

Deadlock is still possible: T1 holds X on A and wants B, T2 holds X on B and wants A. The usual responses are prevention (order the items) or detection (wait-for graph, then abort one transaction).

## Concurrency without a growing lock phase

**Timestamp ordering.** Each transaction gets a unique timestamp, often the time it started. Every read and write must look like timestamp order. A later transaction must not cause an earlier one to miss an update it should have seen, and an earlier transaction must not overwrite a later one’s write. One response is to abort and restart the transaction with a new timestamp. **Thomas’ write rule** ignores a write that would only put back an older value, instead of aborting.

**Optimistic concurrency control.** The transaction works in a private workspace through a read phase, then a validation phase checks that the items it read are unchanged and that its writes do not collide. Only then does the write phase publish the result. Use it when conflicts are rare. Under heavy conflict, restarts dominate and locking is the better fit.

Classify a protocol by the question it asks: locks and phases (2PL, strict 2PL), timestamps, or validate-at-commit (optimistic).

## Recovery and ARIES

Failure can stop the system after a commit has been decided and before every changed page is on disk, or in the middle of a transaction. Recovery must:

- **redo** the effects of committed transactions that never reached disk,
- **undo** the effects of transactions that did not commit.

**ARIES** does this with a log of log sequence numbers (LSNs):

1. **Analysis** — scan forward from the last checkpoint to learn which transactions were active and which pages may be dirty.
2. **Redo** — repeat logged updates so the database matches the log, including updates of transactions that later abort. Redo is repeating history.
3. **Undo** — roll back the losers, the transactions that had not committed. Undo writes compensation log records so the rollback itself is durable.

## The log, write-ahead logging, and checkpoints

A log record names the transaction, the page or item, and enough information to redo and undo the change.

**Write-ahead logging:** the log record for a change reaches stable storage before the changed data page is treated as durable. If the page were written first and the crash came before the log record, recovery would not know how to undo it.

A **checkpoint** records that a certain prefix of the log is reflected in the database and lists transactions still active. Analysis starts at the checkpoint instead of at the beginning of the log.

## Indexes

A **single-level ordered index** is a sorted file of search-key values, each pointing at a data block.

- **Primary index** — the file is ordered on a key, and the index uses that key. One index entry can represent a block (sparse).
- **Clustering index** — the file is ordered on a non-key field, and the index uses that field. Several records share a key value.
- **Secondary index** — the index order is not the file order. Entries point to individual records (dense).

A **multilevel index** treats a large index as data and indexes it again. The top level stays small enough to search quickly. B-tree and B+ tree indexes are the structure this idea becomes in practice. You should be able to say why a second level exists: the first-level index no longer fits in a handful of blocks.

## Kinds of data

| Kind | Shape | Examples |
| --- | --- | --- |
| Structured | A schema fixed in advance | Relations in this course |
| Semi-structured | Structure travels with the data and can vary | JSON, XML |
| Unstructured | No schema of fields | Text documents, images, audio |

Relational design in Units I–III targets structured data. Semi-structured and unstructured data explain why some systems do not force every value into a table. The classification itself is the course requirement.

## File organization

A **heap file** places each new record where space is free. Insertion is simple. Finding a record means a scan, unless a secondary index points at it.

A **hash file** computes a bucket from the search key. Equality search goes to that bucket. Range search does not, because nearby keys need not land in nearby buckets. An ordered index is the better fit for a range.

## Revision checklist

- Name S and X locks and the 2PL rule.
- Separate strict 2PL from basic 2PL by when exclusive locks are released.
- Give one sentence each for timestamp ordering and optimistic control.
- List the three ARIES passes and the write-ahead rule.
- Distinguish primary, clustering, and secondary indexes, then say what the second level of a multilevel index is for.
- Match heap and hash files to the searches they serve.
