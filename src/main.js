import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import Lesson from './containers/Lesson';
import Profile from './containers/Profile';
import App from './containers/App';
import store from './redux/store';
import Detail from './containers/Detail';
window._store=store;
import {Provider} from 'react-redux';
import './common/index.less';
import Login from "./containers/Login";
import Reg from "./containers/Reg/index";
ReactDOM.render(<Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/lesson'} component={Lesson}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/detail'} component={Detail}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/'} component={Reg}/>

                </Switch>
            </App>
        </Router>
    </Provider>
    ,document.querySelector('#app'))