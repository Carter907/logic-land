## Logical Equivlances

| **Name**                | **Logical Equivalence**                                                |
| ----------------------- | ---------------------------------------------------------------------- |
| **Commutative Laws**    | $P \land Q \equiv Q \land P$                                           |
|                         | $P \lor Q \equiv Q \lor P$                                             |
| **Associative Laws**    | $(P \land Q) \land R \equiv P \land (Q \land R)$                       |
|                         | $(P \lor Q) \lor R \equiv P \lor (Q \lor R)$                           |
| **Distributive Laws**   | $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$               |
|                         | $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$                |
| **Identity Laws**       | $P \land \text{True} \equiv P$                                         |
|                         | $P \lor \text{False} \equiv P$                                         |
| **Domination Laws**     | $P \land \text{False} \equiv \bf c$                                    |
|                         | $P \lor \text{True} \equiv \bf t$                                      |
| **Idempotent Laws**     | $P \land P \equiv P$                                                   |
|                         | $P \lor P \equiv P$                                                    |
| **Double Negation Law** | $\neg (\neg P) \equiv P$                                               |
| **De Morgan's Laws**    | $\neg (P \land Q) \equiv \neg P \lor \neg Q$                           |
|                         | $\neg (P \lor Q) \equiv \neg P \land \neg Q$                           |
| **Absorption Laws**     | $P \land (P \lor Q) \equiv P$                                          |
|                         | $P \lor (P \land Q) \equiv P$                                          |
| **Negation Laws**       | $P \land \neg P \equiv \bf {c}$                                        |
|                         | $P \lor \neg P \equiv \bf t$                                           |
| **Implication Law**     | $P \rightarrow Q \equiv \neg P \lor Q$                                 |
| **Contrapositive Law**  | $P \rightarrow Q \equiv \neg Q \rightarrow \neg P$                     |
| **Biconditional Law**   | $P \leftrightarrow Q \equiv (P \rightarrow Q) \land (Q \rightarrow P)$ |
| **Exportation Law**     | $(P \land Q) \rightarrow R \equiv P \rightarrow (Q \rightarrow R)$     |

### Explanation of Key Terms:
- **Commutative Laws**: The order of operands does not matter.
- **Associative Laws**: The grouping of operands does not matter.
- **Distributive Laws**: Logical AND and OR can be distributed over each other.
- **Identity Laws**: Combining a proposition with `True` or `False` leaves it unchanged.
- **Domination Laws**: Combining a proposition with `True` or `False` dominates the result.
- **Idempotent Laws**: Repeating the same operation does not change the result.
- **Double Negation**: Negating a negation returns the original proposition.
- **De Morgan's Laws**: Negation of AND/OR is equivalent to OR/AND of negations.
- **Absorption Laws**: A proposition absorbs another when combined with OR/AND.
- **Negation Laws**: A proposition combined with its negation results in `False` or `True`.
- **Implication Law**: Implication can be rewritten using OR and negation.
- **Contrapositive Law**: An implication is equivalent to its contrapositive.
- **Biconditional Law**: A biconditional is equivalent to mutual implications.
- **Exportation Law**: Implication can be nested.

Let me know if you need further assistance!