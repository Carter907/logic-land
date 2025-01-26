<script lang="ts">
    import ReferenceEntry from "./ReferenceEntry.svelte";
    import entries from "$lib/entries.json";
</script>

<section class="bg-gray-800 flex flex-col min-h-[100vh] space-y-2 items-center">
    <div class="align-top">
        <strong class="mb-2 bg-gray-800 w-full text-center"> reference </strong>
    </div>

    <div class="mx-4">
        <ReferenceEntry {entries}></ReferenceEntry>
    </div>
</section>
