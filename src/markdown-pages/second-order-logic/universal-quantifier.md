## Universal Quantifiers

Universal quantifiers are quantifiers that work with sets and describe truth value when all elements in the domain of discourse evaluate the predicate to true, showing universality.

You can think of a universal quantifier in programmatic terms.
Here is an example program in C:

```c
bool for_each_character(char *str, int len) {

  // every character in str does not have the ascii code 97
  for (int i = 0; i < len; i++) {
    // checks if the ascii value is 97 so it can return false
    if (str[i] == 97) {
      return false;
    }
  }

  return true;
}
```
The code checks every character to make sure it does not equal 97. If it does the universal statement is false.
You can think of the conditional as a predicate that evaluates the entire expression ( the function in this case ) to false.

We can convert the C code to predicate logic using the universal quanitifer:
### $$\forall \text{character}\ x \text{ such that } x \text{ does not have the ASCII value } 97$$
If you decode the $\forall$ to mean "every", then this declarative sentence makes sense. The only thing missing is the specification of the input set or domain. In the case of the C code, this is specified as the string argument that is passed into the function.





