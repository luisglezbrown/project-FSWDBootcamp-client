import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import GuideRegister from './pages/GuideRegister';
import AllCities from "./pages/AllCities";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/newuser' component={Register}/>
                    <Route path='/newguide' component={GuideRegister}/>
                    <Route path='/all_cities' component={AllCities}/>

                    {/*<Route path='/dashboard' component={Dashboard}/>
                    <Route path='/record/:user' component={Record}/>*/}
                    {/*<Route component={Error}/>*/}            
                </Switch>
            </BrowserRouter>
        </>
    )
}
