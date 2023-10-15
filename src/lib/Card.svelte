<script>
    import { enhance } from "$app/forms";
    import { setCart } from "$lib/stores.js";
    export let id, add_date, title, price, note, status;
    $: IsComplete = status == 0;
</script>

<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 g-0">
    <div class="card bg-light m-2 p-4">
        <div class="row g-0 p-0 m-0">
            <span class="text-dark col-10 fs-10">
                {add_date.toLocaleDateString("en-UK")}
                <h1
                    class:middle-stroke={IsComplete}
                    class:disabled={IsComplete}
                    class="text-primary fs-19 text-crop"
                >
                    {title}
                </h1>
            </span>
            <div class="text-end align-content-end col-2">
                {#if status == 2}
                    <form method="POST" action="?/undo" use:enhance>
                        <input type="hidden" name="id" value={id} />
                        <button type="submit" class="button">
                            <svg
                                width="27"
                                height="27"
                                viewBox="0 0 27 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.133057"
                                    y="0.0584717"
                                    width="25.9827"
                                    height="25.9827"
                                    rx="12.9913"
                                    fill="#F07B7B"
                                />
                                <path
                                    d="M13.1245 23.876C19.1035 23.876 23.9506 19.029 23.9506 13.0499C23.9506 7.07077 19.1035 2.22375 13.1245 2.22375C7.14535 2.22375 2.29834 7.07077 2.29834 13.0499C2.29834 19.029 7.14535 23.876 13.1245 23.876Z"
                                    stroke="#F07B7B"
                                    stroke-width="2.42465"
                                />
                                <g clip-path="url(#clip0_48_2133)">
                                    <path
                                        d="M14.7156 8.57239C14.7624 8.5723 14.8088 8.58145 14.852 8.59929C14.8953 8.61714 14.9346 8.64334 14.9678 8.6764L18.4941 12.2027C18.5609 12.2695 18.5984 12.3601 18.5984 12.4546C18.5984 12.549 18.5609 12.6396 18.4941 12.7064C18.1522 13.0483 17.7304 13.1253 17.4234 13.1253C17.2973 13.1253 17.1847 13.1125 17.0957 13.0975L14.8631 15.3301C14.9218 15.5669 14.96 15.8084 14.977 16.0518C15.0098 16.5519 14.9543 17.2536 14.4641 17.7437C14.3973 17.8105 14.3067 17.848 14.2123 17.848C14.1178 17.848 14.0273 17.8105 13.9605 17.7437L11.9451 15.7291L9.67829 17.9959C9.53937 18.1348 8.80988 18.6385 8.67096 18.4996C8.53205 18.3606 9.03571 17.6304 9.17462 17.4922L11.4415 15.2254L9.42681 13.2101C9.36003 13.1433 9.32252 13.0527 9.32252 12.9582C9.32252 12.8638 9.36003 12.7732 9.42681 12.7064C9.91694 12.2163 10.6186 12.16 11.1187 12.1935C11.3621 12.2105 11.6036 12.2487 11.8404 12.3075L14.073 10.0755C14.0544 9.96705 14.0449 9.8572 14.0445 9.74712C14.0445 9.44079 14.1215 9.01906 14.4641 8.6764C14.5309 8.60981 14.6213 8.57241 14.7156 8.57239Z"
                                        fill="#F0F0F0"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_48_2133">
                                        <rect
                                            width="11.0037"
                                            height="11.0037"
                                            fill="white"
                                            transform="translate(7.62256 7.54797)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </form>
                {:else if status == 1}
                    <form method="POST" action="?/pin" use:enhance>
                        <input type="hidden" name="id" value={id} />
                        <button type="submit" class="button">
                            <svg
                                width="27"
                                height="27"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.0001 18.7403C14.6025 18.7403 18.3334 15.0094 18.3334 10.407C18.3334 5.80463 14.6025 2.07367 10.0001 2.07367C5.39771 2.07367 1.66675 5.80463 1.66675 10.407C1.66675 15.0094 5.39771 18.7403 10.0001 18.7403Z"
                                    stroke="#F07B7B"
                                    stroke-width="1.86636"
                                />
                                <g clip-path="url(#clip0_38_76)">
                                    <path
                                        d="M10.6063 6.15521C10.6424 6.15515 10.6781 6.16219 10.7114 6.17592C10.7447 6.18966 10.775 6.20983 10.8005 6.23527L13.5148 8.94965C13.5662 9.00107 13.5951 9.07079 13.5951 9.14349C13.5951 9.2162 13.5662 9.28592 13.5148 9.33734C13.2516 9.60055 12.927 9.65977 12.6907 9.65977C12.5936 9.65977 12.507 9.6499 12.4384 9.63839L10.7199 11.3569C10.7651 11.5392 10.7945 11.7251 10.8076 11.9124C10.8328 12.2974 10.79 12.8375 10.4128 13.2148C10.3614 13.2662 10.2916 13.2951 10.2189 13.2951C10.1462 13.2951 10.0765 13.2662 10.0251 13.2148L8.47378 11.664L6.7289 13.4089C6.62198 13.5158 6.06046 13.9035 5.95353 13.7966C5.8466 13.6897 6.23429 13.1276 6.34122 13.0212L8.08609 11.2763L6.53533 9.72503C6.48393 9.67361 6.45506 9.60389 6.45506 9.53118C6.45506 9.45848 6.48393 9.38875 6.53533 9.33734C6.91261 8.96007 7.45274 8.91675 7.83769 8.94252C8.02504 8.95565 8.2109 8.985 8.39317 9.03026L10.1117 7.31225C10.0974 7.22874 10.09 7.14418 10.0898 7.05946C10.0898 6.82366 10.149 6.49903 10.4128 6.23527C10.4642 6.18402 10.5338 6.15523 10.6063 6.15521Z"
                                        fill="#F07B7B"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_38_76">
                                        <rect
                                            width="8.47"
                                            height="8.47"
                                            fill="white"
                                            transform="translate(5.76514 5.98511)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </form>
                {/if}
            </div>
        </div>
        <div>
            <p
                class:middle-stroke={IsComplete}
                class:disabled={IsComplete}
                class="text-dark fs-16 text-crop"
            >
                {note}
            </p>
        </div>
        <div>
            <div class="row g-0">
                <div class="col">
                    {#if !IsComplete}
                        <form method="POST" action="?/complete" use:enhance>
                            <input type="hidden" name="id" value={id} />
                            <button class="btn fs-13 btn-lg btn-secondary"
                                >Mark As Completed</button
                            >
                            <button
                                class="ms-2 fs-13 btn btn-lg btn-outline-dark"
                                type="button"
                                on:click={() =>
                                    setCart({
                                        id,
                                        add_date,
                                        title,
                                        price,
                                        note,
                                        status,
                                    })}>open Note</button
                            >
                        </form>
                    {:else}
                        <form method="POST" action="?/undo" use:enhance>
                            <input type="hidden" name="id" value={id} />
                            <button
                                class="btn fs-13 btn-lg btn-primary"
                                type="submit">Undo Note</button
                            >
                            <button
                                class="ms-2 fs-13 btn btn-lg btn-outline-dark"
                                type="button"
                                on:click={() =>
                                    setCart({
                                        id,
                                        add_date,
                                        title,
                                        price,
                                        note,
                                        status,
                                    })}>open Note</button
                            >
                        </form>
                    {/if}
                </div>
                <div class="col-3 text-end">
                    <h2
                        class="text-secondary fs-16 text-crop"
                        class:disabled={IsComplete}
                    >
                        {price} EGP
                    </h2>
                </div>
            </div>
        </div>
    </div>
</div>