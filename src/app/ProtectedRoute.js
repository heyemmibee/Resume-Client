import {
    Route,
    Redirect
} from "react-router-dom";
import { useLocalStorage } from '../hooks';

const ProtectedRoute = ({ children, ...rest }) => {
    const [localStorage,] = useLocalStorage('currentUser', '');
    const renderComponent = children.filter(item => item.props.path === rest.location.pathname)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.accessToken !== '' ? renderComponent : (<Redirect
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
