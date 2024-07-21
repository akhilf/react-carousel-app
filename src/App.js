import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ImageSlider from './imageSlider';

function App() {
  const author = 'Akhil Francis';
  return (
    <div className='wrapper'>
      <div className="App">
        <Header author={author} />
      </div>
      <div className='footer'>
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
