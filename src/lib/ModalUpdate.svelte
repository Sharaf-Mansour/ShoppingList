<script>
  import { enhance } from "$app/forms";
  import { fly } from "svelte/transition";
  import { cubicIn } from "svelte/easing";

  import { cartStore } from "$lib/index.svelte.js";
  let item = $derived(cartStore.cart());
</script>

{#if cartStore.showStore.showUpdate()}
  <div
    class="modal d-block"
    transition:fly={{ duration: 500, easing: cubicIn }}
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body fs-16">
          <form method="POST" action="?/update" use:enhance>
            <input type="hidden" name="id" value={item.id} />
            <div class="row m-1 g-2">
              <div class="col-9">
                <label for="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Note Title..."
                  class="form-control bg-light"
                  value={item.title}
                />
              </div>
              <div class="col-3">
                <label for="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="price"
                  min="0"
                  max="100000"
                  class="form-control bg-light"
                  value={item.price}
                />
              </div>
            </div>
            <div class="row m-1 g-2">
              <label for="note">Note</label>
              <textarea
                name="note"
                id="note"
                placeholder="Note Details..."
                class="form-control bg-light"
                value={item.note}
              ></textarea>
            </div>
            <div class="row g-1 m-1">
              <button
                class="btn fs-13 col btn-lg btn-secondary"
                type="submit"
                onclick={() => cartStore.showStore.toggleShowUpdate()}
                >Save</button
              >
              <button
                class="ms-2 fs-13 btn btn-lg col btn-outline-dark"
                data-dismiss="modal"
                type="button"
                onclick={() => cartStore.showStore.toggleShowUpdate()}
                >Cancel</button
              >
            </div>
            <div class="row g-1 m-1">
              <button
                class="btn fs-13 col btn-lg btn-primary"
                type="button"
                onclick={() => cartStore.showStore.toggleShowDelete()}
                >Delete</button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
{/if}
