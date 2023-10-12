import { writable } from 'svelte/store';
export let show = writable(false);
export const setShow = () =>  show.update(value => !value);