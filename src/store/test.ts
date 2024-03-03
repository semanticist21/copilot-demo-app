import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TestStore {
  bears: number;
  increment: () => void;
}

export const useTestStore = create<TestStore>()(
  persist(
    (set) => ({
      bears: 0,
      increment: () => set((state) => ({ bears: state.bears + 1 })),
    }),
    {
      name: "test-store",
    }
  )
);
