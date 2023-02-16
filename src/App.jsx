import Form from './components/Form'
import TodoList from './components/TodoList'

export default function App() {
	return (
		<div style={{ display: 'flex', marginTop: 10 }}>
			<TodoList />
			<Form />
		</div>
	)
}
