import { useContext, createContext } from 'react'

const TodosContext = createContext()

export function TodosProvider({ children }) {
	return <TodosContext.Provider>{children}</TodosContext.Provider>
}
