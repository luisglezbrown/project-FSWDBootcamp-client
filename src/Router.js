import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";

import PrivateRoute from "./pages/PrivateRoute";
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import GuideRegister from './pages/GuideRegister';
import AllCities from "./pages/AllCities";
import City from "./pages/City";
import Guide from "./pages/Guide";
import Tour from "./pages/Tour";
import AccountCreated from "./pages/AccountCreated";
import BookingCreated from "./pages/BookingCreated";
import TourCreated from "./pages/TourCreated";
import NewTour from "./pages/NewTour";
import MyAccount from "./pages/MyAccount";
import TourEdit from "./pages/TourEdit";
import UserEdit from "./pages/UserEdit";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


export default function Router() {
    return (
        <>
            <BrowserRouter>
            <ScrollToTop />
            <Navbar />
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/login' component={Login} />
                    <Route path='/newuser' component={Register} />
                    <Route path='/newguide' component={GuideRegister} />
                    <Route path='/allCities' component={AllCities} />
                    <Route path='/city/:id'component={City} />
                    <Route path='/guide/:id'component={Guide} />
                    <Route path='/tour/:id'component={Tour} />
                    <Route path='/accountcreated' component={AccountCreated} />
                    <Route path='/tourcreated' component={TourCreated} />
                    <Route path='/bookingcreated' component={BookingCreated} />
                    <Route path='/newTour' component={NewTour} />
                    <Route path='/touredit' component={TourEdit} />
                    <Route path='/useredit' component={UserEdit} />
                    <PrivateRoute path='/myaccount'><MyAccount /></PrivateRoute>

                    {/* TODO: <Route path='/dashboard' component={Dashboard}/>*/}
                    {/*<Route component={Error}/>*/} {/* TODO: Crear un componente de error */}           
                </Switch>
            <Footer />
            </BrowserRouter>
        </>
    )
}
