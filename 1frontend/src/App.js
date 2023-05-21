import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Landing, Register, Error, ProtectedRoute } from './pages';
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout
} from './pages/dashboard';
import ForgotPassword from './pages/ForgotPassword';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path='/' element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/' element={<h1>dashboard</h1>} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
