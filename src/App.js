import './App.css';
import Search from './Components/Search';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <Container>
          <Search></Search>
        </Container>
    </div>
  );
}

export default App;
