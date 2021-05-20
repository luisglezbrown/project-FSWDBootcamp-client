import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>


                    {/*<Route path='/dashboard' component={Dashboard}/>
                    <Route path='/record/:user' component={Record}/>*/}
                    {/*<Route component={Error}/>*/}            
                </Switch>
            </BrowserRouter>
        </>
    )
}
