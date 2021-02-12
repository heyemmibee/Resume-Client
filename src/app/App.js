import { Suspense, lazy, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { NotificationContext } from '../context/notificationContext';
import ProtectedRoute from './ProtectedRoute';
const Register = lazy(() => import('../Auth/Register'));
const Login = lazy(() => import('../Auth/Login'));
const ResumeList = lazy(() => import('../Resumes/ResumeList'));
const ResumeForm = lazy(() => import('../Resumes/ResumeForm'));

function App() {
  const notificationContext = useContext(NotificationContext);

  return (
    <div className="md:container md:mx-auto">
      <Router>
        <header>
        </header>
        <main>
          <div>
            {notificationContext.notification.message}
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <ProtectedRoute>
                <Route path='/resumes/new' component={ResumeForm} />
                <Route path='/resumes' component={ResumeList} />
              </ProtectedRoute>
            </Switch>
          </Suspense>
        </main>
      </Router>
      <footer>
      </footer>
    </div >
  );
}

export default App;
