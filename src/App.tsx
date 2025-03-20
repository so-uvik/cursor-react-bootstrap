import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Login } from './pages/Login';
import { Welcome } from './pages/Welcome';
import { Dashboard } from './pages/Dashboard';
import { Navbar } from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';
const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <Navigate
              to={isAuthenticated ? '/welcome' : '/login'}
              replace
            />
          }
        />
      </Routes>
    </>);};
    
function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router> );}
export default App;
