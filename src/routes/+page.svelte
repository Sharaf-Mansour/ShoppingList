<script>
import Card from '$lib/Card.svelte';
import { enhance } from "$app/forms";
export let data;
$: array = data.cart.sort((b, a) => a.status - b.status);
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
<Card {date} id={item.id} title={item.title} price={item.price} note={item.note} status={item.status} />
{/each}
</div>