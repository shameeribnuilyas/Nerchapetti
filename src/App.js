import TopBar from './components/Topbar';
import Logo from './components/Logo';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Policies from './components/Policies';
import Container from './components/Container' ;

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Switch>
        <Route exact path='/' component={Logo}/>
        <Route exact path='/container' component={Container}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/donate' component={Donate}/>
        <Route exact path='/privacyPolicy' component={Privacy} />
        <Route exact path='/termsAndConditions' component={Terms} />
        <Route exact path='/cancellationAndRefundPolicy' component={Policies} />
      </Switch>
      <Contact/> 
    </div>
  );
}

export default App;
