<script lang="ts">
    export let redirect: string;

    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    onMount(() => {
        goto(redirect);
    });
</script>
