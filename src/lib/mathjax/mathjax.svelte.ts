import { onMount } from "svelte";

export default function loadMathJax() {
  onMount(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
    script.async = false;

    const config = document.createElement("script")
    config.innerHTML = `
      MathJax = {
        tex: {
          inlineMath: [
            ["$", "$"],
          ],
        },
      };
    `
    config.async = false;

    document.head.appendChild(script)

    document.head.appendChild(config)


  })
}

