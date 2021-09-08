import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './component/header/header'
import Registration from'./component/Registration/Registration'
import About from'./component/About/About'
import DetailScreen from'./component/DetailScreen/DetailScreen'
import TableComponent from './component/TableComponent'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route>
          <Route exact={true} path="/">
            <Header></Header>
          </Route>
          <Route path="/Registration">
            <Registration></Registration>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/detail">
            <DetailScreen></DetailScreen>
          </Route>
          <Route path="/TableComponent">
            <TableComponent></TableComponent>
          </Route>
        </Route>
      
    </Switch>
    </BrowserRouter>
    </div>

    
        
  );
}

export default App;
