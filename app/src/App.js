import './App.css';
import Calculator from './components/calculator/Calculator';
import History from './components/History';



function App() {

  return (
		<div className="App">
			<div className="flex h-screen">
				<div className="flex-2 bg-transparent">
					<Calculator />
				</div>
				<div className="flex-1">
					<History />
				</div>
			</div>
			
		</div>
	);
}

export default App;
