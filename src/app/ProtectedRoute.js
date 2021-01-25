import {
    Route,
    Redirect
} from "react-router-dom";
import { useLocalStorage } from '../hooks';

const ProtectedRoute = ({ children, ...rest }) => {
    const [localStorage,] = useLocalStorage('currentUser', '');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.accessToken !== '' ? children : (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />)
            }
        />
    )
}

export default ProtectedRoute;
