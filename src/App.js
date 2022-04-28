import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import {makeStyles} from "@material-ui/core";

function App() {

    const useStyles=makeStyles(() => ({
        App:{
            backgroundColor:'#14161a',
            color: 'white',
            minHeight: "100vh",
        },
    }));
    const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
          <Route path="/https://haziqfariduddin.github.io/CoinMe/" component={Homepage} exact/>
          <Route path="/coins/:id" component={Coinpage} exact/>
      </div>
    </BrowserRouter>

  );
}

export default App;