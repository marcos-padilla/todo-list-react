import { useContext, createContext, useReducer, useEffect } from 'react'

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
		case 'toggle':
			return state.map((todo) => {
				if (todo.id == action.id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				} else {
					return todo
				}
			})
		case 'delete':
			return state.filter((todo) => todo.id != action.id)
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
	const tempTodos = JSON.parse(localStorage.getItem('products'))
	const [todos, dispatch] = useReducer(reducer, tempTodos ? tempTodos : [])

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(todos))
	}, [todos])

	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodosContext.Provider>
	)
}
