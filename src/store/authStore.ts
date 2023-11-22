import create from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (userData: { user: string; isAuthenticated: boolean }) =>
    set({ user: userData, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;
