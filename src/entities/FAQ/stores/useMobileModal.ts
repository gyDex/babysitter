import { create } from 'zustand'

interface MobileModalState {
  isOpen: boolean,
  setOpen: (isOpen: boolean) => void
}

export const useMobileState = create<MobileModalState>()((set) => ({
  isOpen: true,
  setOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
}))