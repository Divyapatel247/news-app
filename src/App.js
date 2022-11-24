// import './App.css';

import React,{useState}from 'react';
import Navebar2 from './Componant/Navebar2';
import News from './Componant/News';

import{BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
  const apiKey="6b43a9f8afae4b29ae2554f86c4bd6d4"
  // process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
    return (
      <>
        <Router>
      
      <Navebar2/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Switch>
        <Route exact path="/home"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} country="in" category="general"/></Route>
        <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={5} country="in" category="business"/></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
        <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} country="in" category="general"/></Route>
        <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={5} country="in" category="health"/></Route>
        <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={5} country="in" category="science"/></Route>
        <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={5} country="in" category="sports"/></Route>
        <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={5} country="in" category="technology"/></Route>
      </Switch>

      </Router>
      </>

    )
  }

export default App;