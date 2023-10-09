<script>
import Card from "$lib/Card.svelte";
import { enhance } from "$app/forms";
    export let data;
</script>

<!-- <Card date="2021-10-10 - 1:11 PM" title="I Want To Buy A Caple For My Laptop" price="100" note="here is some dummy text" status="3" />
<Card date="2021-10-10 - 1:11 PM" title="I Want To Buy A Caple For My Laptop" price="100" note="here is some dummy text" status="2" />
<Card date="2021-10-10 - 1:11 PM" title="I Want To Buy A Caple For My Laptop" price="100" note="here is some dummy text" status="1" /> -->

 <form method="POST" action="?/create" use:enhance>
<input type="text" name="title" placeholder="title" />
<input type="number" name="price" placeholder="price" />
<input type="text" name="note" placeholder="note" />
<button type="submit">Submit</button>
</form> 
<table class="table">
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Price</th>
        <th>Status</th>
        <th>Date</th>
         
    </tr>
    {#each data.cart as item}
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.status}</td>
            <td>{item.add_date}</td>
  
        </tr>
    {/each}
</table> 