import './App.css';
import Calculator from './components/Calculator';
import History from './components/History';
import background from './assets/background.mp4';


function App() {
  return (
		<div className="App">
			<div className="flex">
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
