import Header from './components/Header'
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
       <Header />
       <div class="pageWrapper">
         <Main />
       </div>
       <Footer />
    </div>
  );
}

export default App;
