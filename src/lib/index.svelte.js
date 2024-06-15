let cart = $state({});
let show = $state(false);
let showCreate = $state(false);
let showUpdate = $state(false);
let showDelete = $state(false);

export const getCart = () => cart;
export const getShow = () => show;
export const getShowCreate = () => showCreate;
export const getShowUpdate = () => showUpdate;
export const getShowDelete = () => showDelete;

export const setCart = (x) => { cart = x; show = true;  }
export const setShow = () => show = !show;
export const setShowCreate = () => { showCreate = !showCreate;}
export const setShowUpdate = () => { show = false; showUpdate = !showUpdate; }
export const setShowDelete = () => { showUpdate = false; showDelete = !showDelete; }