import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card';
import Title from './components/Title';



function App() {
  return (
    <>
        <div className="grid-container container">
            {/* title component */}
            <Title />
            {/* Card component */}
            
            <Card />
        </div>
    </>
  )
}

export default App
