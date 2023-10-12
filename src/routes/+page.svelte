<script>
    import Card from "$lib/Card.svelte";
    import Modal from "$lib/Modal.svelte";
    import { setShow,cart } from "$lib/stores.js";
    import { enhance } from "$app/forms";
    export let data;
    $: array = data.cart.sort((b, a) => a.status - b.status);
    $: firstItem = $cart;
    let date = new Date().toLocaleDateString();
</script>

<form method="POST" action="?/create" use:enhance>
    <input type="text" name="title" placeholder="title" />
    <input type="number" name="price" placeholder="price" />
    <input type="text" name="note" placeholder="note" />
    <button type="submit">Submit</button>
</form>
<div class="row m-2">
    {#each array as item (item.id)}
        <Card
        add_date = {item.add_date}
            id={item.id}
            title={item.title}
            price={item.price}
            note={item.note}
            status={item.status}
        />
    {/each}
</div>
<button class="btn btn-info" on:click={() => setShow()}>Show Modal</button>
<Modal
add_date = {firstItem.add_date}
    id={firstItem.id}
    title={firstItem.title}
    price={firstItem.price}
    note={firstItem.note}
    status={firstItem.status}
/>
