import { create } from 'zustand'

interface MobileModalState {
  isOpen: boolean,
  type: string,
  setOpen: (isOpen: boolean, type: string) => void
}

export const useMobileState = create<MobileModalState>()((set) => ({
  isOpen: true,
  type: '',
  setOpen: (isOpen, type) => set(() => ({ isOpen: isOpen, type })),
}))