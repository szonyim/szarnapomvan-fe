import { defineStore } from "pinia";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
export const useAppStore = defineStore("storeId", {
  state: () => ({
    bootstrap,
    posts: {},
    locations: [],
    isHumanComplaint: false,
    levels: [
      {value: 0, text: 'Annyira nem vészes'},
      {value: 1, text: 'Szar'},
      {value: 2, text: 'Nagyon szar'},
      {value: 3, text: 'Kegyetlen'},
    ]
  }),
});
