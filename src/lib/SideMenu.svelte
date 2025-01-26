<script lang="ts">
    import Sidebar from "$lib/Sidebar.svelte";
    let items = [
        {
            name: "first order logic",
            href: "/first-order-logic",
            children: [
                {
                    name: "propositions",
                    href: "/propositions",
                    children: [
                        { name: "operators", href: "/operators", children: [] },
                    ],
                },
                {
                    name: "interfence rules",
                    href: "/interference-rules",
                    children: [],
                },

                { name: "arguments", href: "/arguments", children: [] },
                {
                    name: "logical absolutes",
                    href: "/logical-absolutes",
                    children: [],
                },
            ],
        },
    ];
</script>

<section class="bg-gray-800 flex flex-col min-h-[100vh] space-y-2 items-center">
    <div class="align-top">
        <strong class="mb-2 bg-gray-800 w-full text-center"
            >reference entries</strong
        >
    </div>

    <div>
        <Sidebar {items} path="/reference"></Sidebar>
    </div>
</section>
