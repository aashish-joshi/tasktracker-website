import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { checkSignIn } from './functions/auth';

function App() {

  if (checkSignIn()){
    return (
      <div className="App">
        <Header />
        <p>Signed in!!</p>
        <Footer />
      </div>
    );
  }else{
    return (
      <div className="App">
        <Header />
        <p>Not signed in.</p>
        <Footer />
      </div>
    );
  }

}

export default App;
