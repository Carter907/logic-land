## Universal Quantifiers

Universal quantifiers are quantifiers that work with sets and describe truth value when all elements in the domain of discourse evaluate the predicate to true, showing universality.

You can think of a universal quantifier in programmatic terms.
Here is an example program in C:

```c
bool for_each_character(char *str, int len) {

  // every character in str does not have the ascii code 97
  for (int i = 0; i < len; i++) {

    if (str[i] == 97) {
      return false;
    }
  }

  return true;
}
```

this code equates to 
$$\forall x:P(x), where\ P(x)=x\ does\ not\ have\ the\ ASCII\ value\ 97$$
- This checks every character to make sure it does not equal 97. If it does the universal statement is false.
- You can think of the conditional as a predicate that evaluates the entire expression ( the function in this case ) to false.




