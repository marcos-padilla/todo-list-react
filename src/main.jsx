import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TodosProvider } from './context/TodosProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TodosProvider>
			<App />
		</TodosProvider>
	</React.StrictMode>
)
