import { create } from "zustand";

type AppState = {
  count: number;
  incrementCount: () => void;
};

export const useGlobalStore = create<AppState>((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
}));
