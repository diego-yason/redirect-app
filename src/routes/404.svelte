<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ url }) => {
        // prevent some sort of exploit, forgot the name
        let link = url.searchParams.get("link") ?? "";

        if (link?.match(/^http/)) {
            link = "";
        }

        return {
            status: 200,
            props: {
                url: new URL(`https://${url.hostname}${link}`)
            }
        };
    };
</script>

<!-- TODO: make it look nice -->
<script lang="ts">
    export let url: URL;
</script>

<h1>link doesn't exist</h1>

<p>You tried to access <code>{url.pathname}</code>, you sure you typed it right?</p>
