import Todo from './Todo'

export default function TodoList() {
	const temporalTodos = [
		{
			id: 1,
			todo: 'Go shopping',
			description: 'Buy some food for the dinner',
			completed: false,
		},
		{
			id: 2,
			todo: 'Study programming',
			description: 'Continue studying react and vue',
			completed: true,
		},
		{
			id: 3,
			todo: 'Study programming',
			description: 'Continue studying react and vue',
			completed: true,
		},
		{
			id: 4,
			todo: 'Go shopping',
			description: 'Buy some food for the dinner',
			completed: false,
		},
		{
			id: 5,
			todo: 'Go shopping',
			description: 'Buy some food for the dinner',
			completed: false,
		},
		{
			id: 6,
			todo: 'Study programming',
			description: 'Continue studying react and vue',
			completed: true,
		},
		{
			id: 7,
			todo: 'Study programming',
			description: 'Continue studying react and vue',
			completed: true,
		},
	]

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
				{temporalTodos.map((todo) => {
					return <Todo key={todo.id} todo={todo} />
				})}
			</ul>
		</div>
	)
}
