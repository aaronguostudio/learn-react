import { createContext } from 'react'

export interface IAppContext {
  theme: string | null
}

const AppContext = createContext<IAppContext>({
  theme: null
})

export default AppContext
