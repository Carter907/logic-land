<script lang="ts">
    import "../app.css";
    import Nav from "$lib/Nav.svelte";
    import SideMenu from "$lib/SideMenu.svelte";

    let { children } = $props();
</script>

<main class="flex flex-row">
    <div class="basis-1/6">
        <div class="sticky top-0">
            <SideMenu />
        </div>
    </div>
    <div class="basis-2/3 w-1/3">
        <div class="sticky top-0">
            <Nav />
        </div>
        <article class="p-4 prose dark:prose-invert min-w-full">
            {@render children()}
        </article>
    </div>
</main>
