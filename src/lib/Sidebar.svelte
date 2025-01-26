<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  type Item = { name: string; href: string; children: Item[] };
  type Props = { items: Item[]; path: string };

  let { items, path }: Props = $props();
</script>

<div>
  <ul class="list-disc">
    {#each items as item}
      <li class="list-item m-4">
        <a href={path + item.href}>
          {item.name}
        </a>
        {#if item.children.length > 0}
          <Sidebar items={item.children} path={path + item.href}></Sidebar>
        {/if}
      </li>
    {/each}
  </ul>
</div>
