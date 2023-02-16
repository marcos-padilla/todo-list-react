import { useId, useState } from 'react'
import { useTodos } from '../context/TodosProvider'

export default function Form() {
	const titleId = useId()
	const descriptionId = useId()

	const [todo, setTodo] = useState('')
	const [description, setDescription] = useState('')

	const [error, setError] = useState('')
	const { dispatch } = useTodos()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!todo) {
			setError('The title is a required field')
			return
		}
		setError('')
		dispatch({
			type: 'add',
			todo: todo,
			description: description,
		})
		setTodo('')
		setDescription('')
	}

	return (
		<div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
			<form
				style={{
					width: '80%',
					height: 'fit-content',
					border: '1px solid gray',
					padding: '20px 20px',
					display: 'flex',
					flexDirection: 'column',
					gap: 20,
					marginTop: 20,
					borderRadius: 10,
				}}
				onSubmit={handleSubmit}
			>
				<div
					style={{
						display: 'flex',
						placeItems: 'center',
						justifyContent: 'center',
						gap: 10,
					}}
				>
					<label htmlFor={titleId} style={{ fontSize: '1.5rem' }}>
						Title:{' '}
					</label>
					<input
						id={titleId}
						placeholder='Go shopping, do homework...'
						style={{
							height: '2rem',
							fontSize: '1.5rem',
							width: '100%',
						}}
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'start',
						gap: 10,
					}}
				>
					<label htmlFor={descriptionId} style={{ fontSize: '1.5rem' }}>
						Description: <span style={{ color: 'gray' }}>(optional)</span>
					</label>
					<textarea
						id={descriptionId}
						placeholder='Buy some vegetables'
						style={{
							height: '2rem',
							fontSize: '1.5rem',
							width: '100%',
							resize: 'none',
						}}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				{error && <span style={{ color: 'red' }}>{error}</span>}
				<button style={{ background: 'blue' }}>Añadir</button>
			</form>
		</div>
	)
}
