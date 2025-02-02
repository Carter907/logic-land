<script lang="ts">
  import { marked } from "marked";
  import Mathjax from "$lib/mathjax/Mathjax.svelte";
  import loadMathJax from "$lib/mathjax/mathjax.svelte";

  let { data } = $props();

  loadMathJax();
</script>

<Mathjax content={marked.parse(data.source)}></Mathjax>
