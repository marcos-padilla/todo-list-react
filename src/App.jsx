export default function App() {
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
		<div style={{ display: 'flex' }}>
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
						return (
							<li
								key={todo.id}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									placeItems: 'center',
									backgroundColor: todo.completed
										? 'rgb(34,117,76)'
										: 'rgb(50,50,50)',
									padding: 20,
									borderRadius: 10,
								}}
							>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h3 style={{ marginBottom: 0, fontWeight: 'bold' }}>
										{todo.todo}
									</h3>
									<span style={{ color: 'darkgray' }}>{todo.description}</span>
								</div>
								<div
									style={{
										display: 'flex',
										gap: '10px',
									}}
								>
									<button
										style={{
											backgroundColor: todo.completed ? 'green' : 'blue',
										}}
									>
										{todo.completed ? 'Completado' : 'Completar'}
									</button>
									<button
										style={{
											backgroundColor: 'red',
										}}
									>
										Eliminar
									</button>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
			<div style={{ flex: '1' }}>
				<form></form>
			</div>
		</div>
	)
}
