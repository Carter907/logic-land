<script>
  import Markdown from "@magidoc/plugin-svelte-marked";
  import loadMathJax from "$lib/mathjax/mathjax.svelte";

  let { data } = $props();

  loadMathJax();
</script>

<Markdown source={data.source}></Markdown>
