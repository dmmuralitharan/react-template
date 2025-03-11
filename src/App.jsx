import api from './core/interceptors/axiosInterceptor'

function App() {
	return (
		<div className="min-h-dvh flex justify-center items-center flex-col">
			<h1 className="font-bold text-2xl text-slate-800">Hello, Team</h1>

			<button
				className="font-semibold text-slate-800 hover:text-white border m-5 px-5 py-2 rounded hover:bg-slate-500"
				onClick={async () => {
					await api.get('/test')
				}}
			>
				Check API CAll
			</button>
		</div>
	)
}

export default App
