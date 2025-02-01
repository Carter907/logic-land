import { onMount } from "svelte";

export default function loadMathJax() {
  onMount(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
    script.async = true;

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
    config.async = true;

    document.head.appendChild(script)

    document.head.appendChild(config)


  })
}

