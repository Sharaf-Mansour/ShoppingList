import { writable } from 'svelte/store';
export let show = writable(false);
export let cart = writable({});
export let showCreate = writable(false);
export const setShow = () =>  show.update(value => !value);
export const setCart = (x) => {
    cart.update(value => value = x);
    show.update(value => value = true)
} 
export const setShowCreate = () =>  showCreate.update(value => !value);
