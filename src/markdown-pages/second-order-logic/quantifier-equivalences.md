## Quantifier Equivalences

With quantifiers, there are several logical equivalences to be aware of.
What do you think the negation of $\forall\ dog\  x \in S\ |\  \text{x is in a cage.}$ (Where $S$ is an animal shelter).


> [!NOTE] Logical Equivalence 1
> The negation of a statement of the form
> $$\forall x\ \in D\ |\ Q(x).$$
> is logically equivalent to a statement of the form
> $$\exists x\ \in D\ |\ \neg Q(x).$$
> Symbolically, 
> $$\neg(\forall x \in D, Q(x))\equiv \exists x \in D\ |\ \neg Q(x).$$


Conversely, the same equivalence holds for existential quantifiers. That is $p \equiv q$ is the same as $q \equiv p$.

### What are quantifiers really?

So how do quantifiers relate to propositional logic? What is the connection between first-order and second-order logic.

Quantifiers are essentially generalizations of logical and and logical or statements.

- *There exists* is the same as $x_1 \lor x_2 \lor x_3 \ldots x_n$ 
- *For all* is the same as $x_1 \land x_2 \land x_3 \ldots x_n$

$x_i$ is some statement with a similar meaning but different values from the next. This is the purpose of predicates. We are able to plug in some value and create a statement. Predicates are generalizations of statements, while quantifiers are generalizations of propositional operators.

Here is a more concrete example of the equivalence between $\forall$ and $\land$.
