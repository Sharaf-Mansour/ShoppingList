<script>
  import { Card, Modal, ModalCreate, ModalUpdate, ModalDelete } from "$lib";
  import { flip } from "svelte/animate";
  import { cubicOut } from "svelte/easing";

  let cartState = $state({
    cart: {},
    modal: {
      show: false,
      showCreate: false,
      showUpdate: false,
      showDelete: false,
    },
  });

  let { data } = $props();
  let date = $state();
  let time = $state();
  let array = $state(data.cart);
  $effect(() => {
    const intervalId = setInterval(() => {
      array = data.cart.sort((b, a) => a.status - b.status);
      date = new Date().toLocaleDateString("en-UK");
      time = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    }, 1000);

    return () => clearInterval(intervalId);
  });
</script>

<div class="m-3 main-header d-flex justify-content-between">
  <div class="header">
    <span class="header-title me-4">{date}</span>
    <span class="header-subtitle">{time}</span>
  </div>
  <button
    class="btn btn-custom bg-light border-15 text-primary d-flex justify-content-end px-5 align-items-center fs-22"
    onclick={() => (cartState.modal.showCreate = !cartState.modal.showCreate)}
    >Create A new Note
    <svg
      class="ms-2"
      width="25"
      height="25"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_227_1471)">
        <g clip-path="url(#clip1_227_1471)">
          <path
            d="M0.807129 3.35909V22.1852C0.807129 22.6194 0.979604 23.0358 1.28661 23.3428C1.59362 23.6498 2.01001 23.8223 2.44419 23.8223V3.35909C2.44419 3.142 2.53042 2.93381 2.68393 2.7803C2.83743 2.6268 3.04563 2.54056 3.26272 2.54056H23.7259C23.7259 2.10639 23.5535 1.68999 23.2465 1.38299C22.9394 1.07598 22.5231 0.903503 22.0889 0.903503H3.26272C2.61145 0.903503 1.98687 1.16222 1.52635 1.62273C1.06584 2.08324 0.807129 2.70783 0.807129 3.35909Z"
            fill="#FF4B4B"
          />
          <path
            d="M6.53689 4.17761C5.88562 4.17761 5.26104 4.43633 4.80052 4.89684C4.34001 5.35735 4.0813 5.98194 4.0813 6.6332V24.6408C4.0813 25.2921 4.34001 25.9167 4.80052 26.3772C5.26104 26.8377 5.88562 27.0964 6.53689 27.0964H16.5C17.1511 27.0958 17.7752 26.8368 18.2353 26.3761L26.2814 18.3316C26.7415 17.8713 27 17.2471 27.0001 16.5963V6.6332C27.0001 5.98194 26.7414 5.35735 26.2809 4.89684C25.8204 4.43633 25.1958 4.17761 24.5445 4.17761H6.53689ZM16.3592 18.0926C16.3592 17.6584 16.5317 17.242 16.8387 16.935C17.1457 16.628 17.5621 16.4555 17.9963 16.4555H25.1928C25.2738 16.4554 25.3531 16.4793 25.4205 16.5243C25.488 16.5692 25.5406 16.6332 25.5716 16.7081C25.6026 16.783 25.6107 16.8654 25.5949 16.9449C25.579 17.0243 25.5399 17.0973 25.4825 17.1546L17.0583 25.5789C17.001 25.6362 16.928 25.6753 16.8485 25.6912C16.7691 25.707 16.6866 25.6989 16.6118 25.6679C16.5369 25.6369 16.4729 25.5843 16.428 25.5169C16.383 25.4494 16.3591 25.3702 16.3592 25.2891V18.0926Z"
            fill="#FF4B4B"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_227_1471">
          <rect
            width="26.1929"
            height="26.1929"
            fill="white"
            transform="translate(0.807129 0.903503)"
          />
        </clipPath>
        <clipPath id="clip1_227_1471">
          <rect
            width="26.1929"
            height="26.1929"
            fill="white"
            transform="translate(0.807129 0.903503)"
          />
        </clipPath>
      </defs>
    </svg>
  </button>
</div>
<div class="row m-2">
  {#each array as item (item.id)}
    <div
      animate:flip={{ duration: 500, easing: cubicOut }}
      class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 g-0"
    >
      <Card
        add_date={item.add_date}
        id={item.id}
        title={item.title}
        price={item.price}
        note={item.note}
        status={item.status}
        bind:cartState
      />
    </div>
  {/each}
</div>
<Modal bind:cartState />
<ModalCreate bind:cartState />
<ModalUpdate bind:cartState />
<ModalDelete bind:cartState />
