export const cartState = $state({
  cart: {},
  show: {
    show: false,
    showCreate: false,
    showUpdate: false,
    showDelete: false,
  },
});

const showStore = {
  show: () => cartState.show.show,
  showCreate: () => cartState.show.showCreate,
  showUpdate: () => cartState.show.showUpdate,
  showDelete: () => cartState.show.showDelete,
  toggleShow() {
    cartState.show.show = !cartState.show.show;
  },
  // toggleShowCreate() {
  //   cartState.show.showCreate = !cartState.show.showCreate;
  // },
  toggleShowUpdate() {
    cartState.show.show = false;
    cartState.show.showUpdate = !cartState.show.showUpdate;
  },
  toggleShowDelete() {
    cartState.show.showUpdate = false;
    cartState.show.showDelete = !cartState.show.showDelete;
  },
};

export const cartStore = {
  setCart(x) {
    cartState.cart = x;
    cartState.show.show = true;
  },
  cart() {
    return cartState.cart;
  },
  showStore,
};
