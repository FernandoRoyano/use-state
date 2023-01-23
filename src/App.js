import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import WeatherWidget from './Components/WeatherWidget/WeatherWidget';


function App() {

  const [theme, setTheme] = useState('light')
  const [unit, setUnit] = useState('C')
  
  const toggleTheme = (event) => {
  setTheme(event.target.value)
}

  return (
    <div className={"App " + theme}>

      <Counter />
      
      <select onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>


      <button onClick={() => setUnit('C')}>C</button>
      <button onClick={() => setUnit('F')}>F</button>
      
      <div>
        <WeatherWidget city='Madrid' celsius={3} unit={unit} theme= {theme} />
        <WeatherWidget city='Vancouver' celsius={-5} unit={ unit}  theme= {theme}/>
        <WeatherWidget city='Yokohama' celsius={32} unit={ unit}  theme= {theme}/>
        <WeatherWidget city='Berlin'  celsius={1} unit={ unit}  theme= {theme}/>
        <WeatherWidget city='Barcelona' celsius={33} unit={ unit} theme= {theme} />
        

      </div>

    </div>
  );
}

export default App;
