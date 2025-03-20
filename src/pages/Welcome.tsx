import { useAuth } from '../context/AuthContext';

export const Welcome = () => {
  const { user } = useAuth();

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>Welcome, {user?.email}!</h1>
      <p>You have successfully logged in to your account.</p>
    </div>
  );
}; 