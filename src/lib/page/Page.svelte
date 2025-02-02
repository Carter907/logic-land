<script lang="ts">
  import Markdown from "@magidoc/plugin-svelte-marked";
  // import { marked } from "marked";
  import loadMathJax from "$lib/mathjax/mathjax.svelte";
  // import "mathjax/es5/tex-chtml";
  // import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";

  let { data } = $props();

  loadMathJax();
  afterNavigate(() => {
    MathJax.typeset();
  });
</script>

<Markdown source={data.source}></Markdown>
