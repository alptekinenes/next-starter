import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const storeName = 'options'
const storeVersion = '0.1.0'

interface OptionsStore {
  storeName: string
  storeVersion: string
  locale: string
  changeLocale: (value: string) => void
}

export const useOptionsStore = create<OptionsStore>()(
  devtools(
    set => ({
      storeName: storeName,
      storeVersion: storeVersion,
      locale: '',
      changeLocale: value => set({ locale: value }),
    }),
    {
      name: `${storeName}_v${storeVersion}`,
    }
  )
)
