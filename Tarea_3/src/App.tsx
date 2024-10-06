import './App.css';
import MyTitle from './Components/Title';
import Paragraph from './Components/Paragraph';
import Paragraph2 from './Components/Paragraph2';
import Paragraph3 from './Components/Paragraph3';
import Lista from './Components/Lista';
import Cuadro from './Components/Cuadro';


function App() {
  return (
    <>
      <MyTitle />
      <Paragraph />
      <Paragraph2 />
      <Paragraph3 title='Alineado Derecha'/>
      <Lista />
      <Cuadro />
    </>
  )
}

export default App
