<script>
import {enhance} from '$app/forms';
 export let data;
</script>
<form method="POST" action="?/create" use:enhance>
    <input type="text" name="title" placeholder="title" />
    <input type="number" name="price" placeholder="price" />
    <input type="text" name="note" placeholder="note" />
    <button type="submit">Submit</button>
</form>
<table class="table">
    <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Note</th>
    </tr>
{#each data.message as item}
    <tr>
        <td>{item.Title}</td>
        <td>{item.Price}</td>
        <td>{item.Note}</td>
    </tr>
{/each}         
</table>