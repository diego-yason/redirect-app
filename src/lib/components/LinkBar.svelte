<script lang="ts">
    import { goto } from "$app/navigation";
    let link = "",
        isRunning = false;

    async function loadLink() {
        goto("./" + link);
    }
</script>

<form on:submit|preventDefault={loadLink}>
    <input type="text" bind:value={link} />
    <button type="submit" disabled={isRunning}>Load Link</button>
    <div id="error" />
</form>
