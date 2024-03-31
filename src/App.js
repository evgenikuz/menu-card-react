import MenuCard from "./components/MenuCard";
import './App.css'
import './styles/container.css'
import './styles/menu.css'
import meat from './img/myaso.jpg'
import choco from './img/choco.jpeg'
import fish from './img/semga.jpg'
import cheese from './img/tvorog.jpg'

function App() {
  return (
    <div className='container'>
      <div className="menu">
        <MenuCard src={meat} alt='Блинчики с мясом' name='Г/Ц Блинчики с мясом вес, Россия' regularPrice='44,50' specialPrice="50,50" discount='11'/>
        <MenuCard src={choco} alt='Блинчики с шоколадом' name='Г/Ц Блинчики с шоколадом 2 шт, Россия'  regularPrice='59,80' specialPrice="52,50" discount='12'/>
        <MenuCard src={fish} alt='Блинчики с семгой' name='Г/Ц Блинчики семгой вес, Япония'  regularPrice='106,30' specialPrice="95,40" discount='10'/>
        <MenuCard src={cheese} alt='Блинчики с творогом' name='Г/Ц Блинчики с творогом вес, Россия'  regularPrice='33,10' specialPrice="30,60" discount='7'/>
      </div>
    </div>
  );
}

export default App;
