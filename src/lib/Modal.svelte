<script>
   import { enhance } from "$app/forms";
   import { fly } from "svelte/transition";
   import { show, setShow, cart } from "$lib/stores.js";
   $: item = $cart;
   $: IsComplete = item.status == 0;
</script>

{#if $show}
   <div
      class="modal d-block"
      transition:fly={{ delay: 250, duration: 500 }}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
   >
      <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content bg-light">
            <div class="modal-body">
               <div class="row g-0 p-0 m-0">
                  <span class="text-dark col-10 fs-10">
                     {item.add_date.toLocaleDateString()}
                     <h1
                        class:middle-stroke={IsComplete}
                        class:disabled={IsComplete}
                        class="text-primary fs-19"
                     >
                        {item.title}
                     </h1>
                  </span>
                  <div class="text-end align-content-end col-2">
                     <button type="submit" class="button">
                        <svg
                           width="36"
                           height="36"
                           viewBox="0 0 36 36"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <rect
                              x="0.342407"
                              y="0.272278"
                              width="35"
                              height="35"
                              rx="4.47379"
                              fill="#F07B7B"
                           />
                           <g clip-path="url(#clip0_9_8823)">
                              <path
                                 d="M26.0411 11.1364C26.1478 11.2434 26.2077 11.3884 26.2077 11.5395C26.2077 11.6907 26.1478 11.8357 26.0411 11.9427L24.8498 13.1352L22.5654 10.8508L23.7567 9.65836C23.8638 9.5513 24.009 9.49115 24.1605 9.49115C24.3119 9.49115 24.4571 9.5513 24.5642 9.65836L26.0411 11.1352V11.1364ZM24.0423 13.9416L21.7579 11.6572L13.9762 19.4401C13.9133 19.5029 13.866 19.5796 13.838 19.6639L12.9185 22.4212C12.9018 22.4714 12.8995 22.5254 12.9117 22.5769C12.9239 22.6284 12.9502 22.6756 12.9876 22.713C13.0251 22.7505 13.0722 22.7767 13.1237 22.789C13.1752 22.8012 13.2292 22.7988 13.2794 22.7821L16.0367 21.8627C16.1209 21.835 16.1976 21.788 16.2605 21.7256L24.0423 13.9416Z"
                                 fill="white"
                              />
                              <path
                                 fill-rule="evenodd"
                                 clip-rule="evenodd"
                                 d="M9.47706 24.3401C9.47706 24.7944 9.65756 25.2302 9.97887 25.5515C10.3002 25.8728 10.7359 26.0533 11.1903 26.0533H23.7544C24.2088 26.0533 24.6446 25.8728 24.9659 25.5515C25.2872 25.2302 25.4677 24.7944 25.4677 24.3401V17.4869C25.4677 17.3355 25.4075 17.1902 25.3004 17.0831C25.1933 16.976 25.0481 16.9158 24.8966 16.9158C24.7451 16.9158 24.5999 16.976 24.4928 17.0831C24.3857 17.1902 24.3255 17.3355 24.3255 17.4869V24.3401C24.3255 24.4915 24.2653 24.6368 24.1582 24.7439C24.0511 24.851 23.9059 24.9111 23.7544 24.9111H11.1903C11.0389 24.9111 10.8936 24.851 10.7865 24.7439C10.6794 24.6368 10.6192 24.4915 10.6192 24.3401V11.776C10.6192 11.6245 10.6794 11.4792 10.7865 11.3721C10.8936 11.265 11.0389 11.2049 11.1903 11.2049H18.6146C18.766 11.2049 18.9113 11.1447 19.0184 11.0376C19.1255 10.9305 19.1857 10.7852 19.1857 10.6338C19.1857 10.4823 19.1255 10.3371 19.0184 10.23C18.9113 10.1229 18.766 10.0627 18.6146 10.0627H11.1903C10.7359 10.0627 10.3002 10.2432 9.97887 10.5645C9.65756 10.8858 9.47706 11.3216 9.47706 11.776V24.3401Z"
                                 fill="white"
                              />
                           </g>
                           <defs>
                              <clipPath id="clip0_9_8823">
                                 <rect
                                    width="17.1048"
                                    height="17.1048"
                                    fill="white"
                                    transform="translate(9.29002 9.21985)"
                                 />
                              </clipPath>
                           </defs>
                        </svg>
                     </button>
                  </div>
               </div>

               <p
                  class:middle-stroke={IsComplete}
                  class:disabled={IsComplete}
                  class="text-dark fs-16"
               >
                  {item.note}
               </p>

               <div class="row g-0">
                  <div
                     class="col align-content-start align-self-start test-start"
                  >
                     {#if !IsComplete}
                        <form method="POST" action="?/complete" use:enhance>
                           <input type="hidden" name="id" value={item.id} />
                           <button class="btn fs-13 btn-lg btn-secondary"
                              >Mark As Completed</button
                           >
                           <button
                              class="ms-2 fs-13 btn btn-lg btn-outline-dark"
                              data-dismiss="modal"
                              type="button"
                              on:click={() => setShow()}>Close Note</button
                           >
                        </form>
                     {:else}
                        <form method="POST" action="?/undo" use:enhance>
                           <input type="hidden" name="id" value={item.id} />
                           <button
                              class="btn fs-13 btn-lg btn-primary"
                              type="submit">Undo Note</button
                           >
                           <button
                              class="ms-2 fs-13 btn btn-lg btn-outline-dark"
                              data-dismiss="modal"
                              type="button"
                              on:click={() => setShow()}>Close Note</button
                           >
                        </form>
                     {/if}
                  </div>
                  <div class="col-3 text-end">
                     <h2
                        class="text-secondary fs-16"
                        class:disabled={IsComplete}
                     >
                        {item.price} EGP
                     </h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
{/if}
