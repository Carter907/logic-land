<script>
  import MathJax from "mathjax/es5/tex-mml-chtml.js";
  import { onMount } from "svelte";

  let { content } = $props();

  onMount(() => {
    MathJax.typeset();
  });
</script>

<div>
  {@html content}
</div>
