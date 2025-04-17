import { create } from "zustand";

const userStore = create((set) => ({
  userName: "",
  setUser: (name) => set((state) => ({ userName: name })),
}));

export default userStore;
