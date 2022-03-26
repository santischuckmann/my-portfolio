import Body from './components/Body'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Footer from './components/Footer'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Body />
      <Cards />
      <Footer />
    <style jsx>
      {`
      .App {
        display: flex;
        flex-direction: column
      }`}
    </style>
    </div>

  );
}

export default App;
