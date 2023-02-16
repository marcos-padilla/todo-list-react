import { useId } from 'react'

export default function Form() {
	const titleId = useId()
	const descriptionId = useId()

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
					/>
				</div>
				<button style={{ background: 'blue' }}>Añadir</button>
			</form>
		</div>
	)
}
