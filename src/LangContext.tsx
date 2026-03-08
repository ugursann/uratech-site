import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from './i18n'

interface LangCtx { lang: Lang; toggle: () => void }
const LangContext = createContext<LangCtx>({ lang: 'tr', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('tr')
  const toggle = () => setLang(l => l === 'tr' ? 'en' : 'tr')
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
