import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';

export default () => {
    return (
        <Router>
           <Route path="/" exact component={Posts} />
           <Route path="/comments" exact component={Comments} />
        </Router>
    );
}