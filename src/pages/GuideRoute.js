import { Redirect, Route } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export default function GuideRoute({ children, ...rest }) {

    const { isAuthenticated } = useAuthContext();
    const { isGuide } = useAuthContext();


    return (
        <Route {...rest} render={() => {
            return isAuthenticated && isGuide
                ? children
                : <Redirect exact to="/" />
        }} />
    )
}
