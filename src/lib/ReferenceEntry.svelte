<script lang="ts">
  import ReferenceEntry from "$lib/ReferenceEntry.svelte";

  let { entries, path = "" } = $props();
</script>

<div>
  <ul class="list-disc">
    {#each entries as entry}
      <li class="list-item m-4">
        <a href={path + entry.href}>
          {entry.name}
        </a>
        {#if entry.children.length > 0}
          <ReferenceEntry entries={entry.children} path={path + entry.href}
          ></ReferenceEntry>
        {/if}
      </li>
    {/each}
  </ul>
</div>
