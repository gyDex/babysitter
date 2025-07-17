import { create } from 'zustand'

interface RegisterStage {
    stage: 'phone' | 'code' | 'payment',
    setStage: (stage: any) => void
}

export const useRegisterStage = create<RegisterStage>()((set) => ({
    stage: 'code',
    setStage: (stage) => set(() => ({ stage: stage })),
}))