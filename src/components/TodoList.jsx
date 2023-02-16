import { useTodos } from '../context/TodosProvider'
import Todo from './Todo'

export default function TodoList() {
	const { todos } = useTodos()

	return (
		<div style={{ flex: '1' }}>
			<ul
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 10,
					listStyle: 'none',
					width: '100%',
				}}
			>
				{todos.map((todo) => {
					return <Todo key={todo.id} todo={todo} />
				})}
			</ul>
		</div>
	)
}
