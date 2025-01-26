<script>
  import Disjunction from "$lib/logic/Disjunction.svelte";
  import Conjunction from "$lib/logic/Conjunction.svelte";
  import Implication from "$lib/logic/Implication.svelte";
  import loadMathJax from "$lib/mathjax/mathjax.svelte";

  loadMathJax();
</script>

<!-- directives:[] -->
<div id="content">
  <h2 id="operators">Operators</h2>
  <p>
    There are several differnt kinds of operators that are used in propositional
    logic. Furthermore, There are two categories of operators: Uniary, which
    work with one operand, and Binary, which work with multiple operands.
  </p>
  <h2>Here are the main Binary Operators</h2>
  <ul>
    <li>
      <h3>Disjunction $\lor$</h3>
      <p>
        represents a logical <em>OR</em> statement. For instance,
      </p>
      <p class="text-2xl">
        <Disjunction op1="I will go to the beach." op2="I will go to the store."
        ></Disjunction>
      </p>
    </li>
    <li>
      <h3>Conjunction $\land$</h3>
      <p>
        represents an logical <em>AND</em> statement. For instance,
      </p>
      <p class="text-2xl">
        <Conjunction op1="I will go to School." op2="I will study."
        ></Conjunction>
      </p>
    </li>
    <li>
      <h3>Implication $\implies$</h3>
      <p>
        An implication is used to signify a causal relationship between two
        statements. The second happens because of the first.
      </p>
      <p class="text-2xl">
        <Implication op1="It is raining." op2="I will use an Umbrella."
        ></Implication>
      </p>
    </li>
  </ul>
</div>
