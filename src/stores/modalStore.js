import { defineStore } from "pinia";

export const useModelStore = defineStore("modal", {
  state: () => ({
    isOpen: true,
    // tab: "login",
    // schema: {
    //   name: "required",
    // },
  }),
  actions: {
    toggleAuthModal() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
  },
  getters: {
    hiddenClass() {
      return this.isOpen ? "hidden" : "";
    },
  },
});
