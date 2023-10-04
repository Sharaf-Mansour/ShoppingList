<script>
export let date, title, price, note,status;
$ : IsComplete = status == 3;
</script>

<div>
    <div class="card m-3 p-3">
        <div >
            <span  class="text-dark">
                {date}
            </span>
            <h1 class:middle-stroke={IsComplete} class:disabled={IsComplete}  class="text-primary fw-bolder">
                {title}
            </h1>
        </div>
        <div >
            <p class:middle-stroke={IsComplete} class:disabled={IsComplete}  class="text-dark fs-3">
                {note}
            </p>
        </div>
        <div  >
            <div class="row">
                {#if !IsComplete }
                <div class="col-9">       
                             <button class="btn btn-lg btn-secondary" >Mark As Completed</button>  
                   
                      <button class="ms-2 btn btn-lg btn-outline-dark" >open Note</button>  
          </div>
                <div class="col-3 text-end"><h2 class="text-secondary">{price} EGP</h2></div>
                {:else}

                <div class="col-9">       
                    <button class="btn btn-lg btn-primary disabled" >Undo Note</button>  
        
        <button class="ms-2 btn btn-lg btn-outline-dark disabled" >open Note</button>  
    </div>
 
       <div class="col-3 text-end" ><h2 class="text-secondary disabled">{price} EGP</h2></div>

              {/if}
            </div>
           
        </div>
    </div>
</div>
 