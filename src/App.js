import "./css/main.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import BookDetails from "./BookDetails";
import Home from "./Home";

function App() {
  let signedIn = false;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/services" component={ServicesList}/> */}
        <Route path="/books/:bookId" component={BookDetails} />
      </Switch>
    </div>
  );
}

export default App;
