<script>
  let { op1, op2 } = $props();
</script>

$$p:\ {op1.split(" ").join("\\space ")}$$ $$q:\ {op2
  .split(" ")
  .join("\\space ")}$$ $$p \lor q$$
