import { create } from "zustand"

type NewPublicationState = {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
}

export const useNewAccount = create<NewPublicationState>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false })
}))
