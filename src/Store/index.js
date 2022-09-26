import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      
      token:null,
      setToken: (value) => set((state) => ({ token: value })),
      setUser: (value) => set((state) => ({ user: value })),

    }),
    {
      name: 'propupAdmin', // unique name
      version:1.0,
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
)