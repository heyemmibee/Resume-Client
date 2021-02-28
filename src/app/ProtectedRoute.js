import {
    Route,
    Redirect, useLocation
} from 'react-router-dom';
import { useLocalStorage } from '../hooks';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [localStorage,] = useLocalStorage('currentUser', '');
    const location = useLocation();

    return (
        <Route
            {...rest}>
            {localStorage.accessToken !== '' ? (
                <Component />
            ) : (
                    <Redirect to={{ pathname: '/login', state: { from: location } }} />
                )}
        </Route>
    )
}

export default ProtectedRoute;
