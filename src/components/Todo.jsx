export default function Todo({ todo }) {
	return (
		<li
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				placeItems: 'center',
				backgroundColor: todo.completed ? 'rgb(34,117,76)' : 'rgb(50,50,50)',
				padding: 20,
				borderRadius: 10,
			}}
		>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<h3 style={{ marginBottom: 0, fontWeight: 'bold' }}>{todo.todo}</h3>
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
}
