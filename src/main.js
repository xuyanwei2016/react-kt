import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import Lesson from './containers/Lesson';
import Profile from './containers/Profile';
import App from './containers/App';
import store from '../redux/store';
window._store=store;
import {Provider} from 'react-redux';
import './common/index.less';
ReactDOM.render(<Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/lesson'} component={Lesson}/>
                    <Route path={'/profile'} component={Profile}/>
                </Switch>
            </App>
        </Router>
    </Provider>
    ,document.querySelector('#app'))