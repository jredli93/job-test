import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';
import AppWrap from '../features/container/AppWrap/AppWrap';
import Comments from '../features/components/Comments/Comments'
import Posts from '../features/components/Posts/Posts'

export default () => {
    return (
        <Router>
           <Route path="/:path?" exact>
                <AppWrap>
                    <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/comments" exact component={Comments} />
                    </Switch>
                </AppWrap>
            </Route>
        </Router>
    );
}