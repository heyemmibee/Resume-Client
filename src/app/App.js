import { Suspense, lazy, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { NotificationContext } from '../context/notificationContext';

const Registration = lazy(() => import('../Auth'));
const ResumeList = lazy(() => import('../Resumes'));

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
              <Route path='/register' component={Registration} />
              <Route path='/resumes' component={ResumeList} />
            </Switch>
          </Suspense>
        </main>
      </Router>
      <footer>
      </footer>
    </div>
  );
}

export default App;
