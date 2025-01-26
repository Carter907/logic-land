<script>
  let { op1, op2, define = false } = $props();
</script>

{#if define}
  $$p:\ {op1.split(" ").join("\\space ")}$$ $$q:\ {op2
    .split(" ")
    .join("\\space ")}
  $$
{/if}
$$p \lor q$$
