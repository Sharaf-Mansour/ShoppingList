import { writable } from 'svelte/store';
export let cart = writable({});
export let show = writable(false);
export let showCreate = writable(false);
export let showUpdate = writable(false);
export let showDelete = writable(false);
export const setCart = (x) => {
    cart.update(value => value = x);
    show.update(value => value = true)
}
export const setShow = () => show.update(value => !value);
export const setShowCreate = () => showCreate.update(value => !value);
export const setShowUpdate = () => {
    show.update(value => value = false);
    showUpdate.update(value => !value);
}
export const setShowDelete = () => {
    showUpdate.update(value => value = false)
    showDelete.update(value => !value);
}