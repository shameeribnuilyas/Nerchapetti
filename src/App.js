import TopBar from './components/topbar';
import Logo from './components/logo';
import SearchBox from './components/searchBox';
import About from './components/about';
import Contact from './components/contact';
import Donate from './components/donate'

function App() {
  return (
    <div className="App">
        <TopBar/>
        <Logo/>
        <SearchBox/>
        <About/>
        <Donate/>
        <Contact/>
    </div>
  );
}

export default App;
