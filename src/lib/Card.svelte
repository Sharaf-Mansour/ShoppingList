<script>
    export let id, date, title, price, note, status;
    $: IsComplete = status == 0;
</script>

<div>
    <div class="card m-3 p-3">
        <div>
            <span class="text-dark">
                {date}
            </span>
            <h1
                class:middle-stroke={IsComplete}
                class:disabled={IsComplete}
                class="text-primary fw-bolder"
            >
                {title}
            </h1>
        </div>
        <div>
            <p
                class:middle-stroke={IsComplete}
                class:disabled={IsComplete}
                class="text-dark fs-3"
            >
                {note}
            </p>
        </div>
        <div>
            <div class="row">
                <div class="col-9">
                    {#if !IsComplete}
                        <form method="POST" action="?/complete">
                            <input type="hidden" name="id" value={id} />
                            <button class="btn btn-lg btn-secondary"
                                >Mark As Completed</button
                            >
                            <button
                            class="ms-2 btn btn-lg btn-outline-dark disabled"
                             type="button">open Note</button
                        >
                        </form>
                    {:else}
                        <form method="POST" action="?/undo">
                            <input type="hidden" name="id" value={id} />
                            <button
                                class="btn btn-lg btn-primary  "
                                 type="submit">Undo Note</button
                            >
                            <button
                            class="ms-2 btn btn-lg btn-outline-dark  "
                             type="button">open Note</button
                        >
                        </form>
                    {/if}
                 
                </div>
                <div class="col-3 text-end">
                    <h2 class="text-secondary" class:disabled={IsComplete}>
                        {price} EGP
                    </h2>
                </div>
            </div>
        </div>
    </div>
</div>
