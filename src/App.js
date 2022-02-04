import './App.css';
import Container from './Components/Container';
import IdCard from "./Components/IdCard";
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
     
     <Container>

    <IdCard
    fullName='John Doe'
    gender='male'
    birth="1992-07-14"
    picture="https://randomuser.me/api/portraits/men/44.jpg"
    />

    <IdCard 
    fullName='Obrien Delores'
    gender='female'
    birth="1988-05-11"
    picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

  </Container>

  <Counter />
     
          
    </div>
  );
}

export default App;
