<script>
  import MathJax from "mathjax/es5/tex-mml-svg.js";
  import { onMount } from "svelte";

  let { content } = $props();

  onMount(() => {
    MathJax.typeset();
    MathJax.confg({
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"],
        ],
        processEscapes: true,
        packages: ["base", "ams", "noerrors", "noundefined"],
      },
      options: {
        skipHtmlTags: [
          "script",
          "noscript",
          "style",
          "textarea",
          "pre",
          "code",
        ],
        ignoreHtmlClass: "tex2jax_ignore",
        processHtmlClass: "tex2jax_process",
      },
      svg: {
        fontCache: "global",
      },
    });
  });
</script>

<div>
  {@html content}
</div>
