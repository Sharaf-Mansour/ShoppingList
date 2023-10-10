<script>
import Card from '$lib/Card.svelte';
import { enhance } from "$app/forms";
export let data;
let date = new Date().toLocaleDateString();
</script>
 
  <form method="POST" action="?/create" use:enhance>
<input type="text" name="title" placeholder="title" />
<input type="number" name="price" placeholder="price" />
<input type="text" name="note" placeholder="note" />
<button type="submit">Submit</button>
</form> 
{#each data.cart as item }
<Card {date} title={item.title} price={item.price} note={item.note} status={item.status} />
{/each}