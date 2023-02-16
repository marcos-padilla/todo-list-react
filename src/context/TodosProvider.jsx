import { useContext, createContext, useReducer } from 'react'

const TodosContext = createContext()

export const useTodos = () => {
	return useContext(TodosContext)
}

function reducer(state, action) {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{
					id: getId(state),
					todo: action.todo,
					description: action.description,
					completed: false,
				},
			]
	}
}

function getId(state) {
	try {
		return state.at(-1).id + 1
	} catch (e) {
		return 1
	}
}

export function TodosProvider({ children }) {
	const [todos, dispatch] = useReducer(reducer, [])
	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodosContext.Provider>
	)
}
