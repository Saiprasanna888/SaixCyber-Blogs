import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Welcome, {user?.email}</p>
          </div>
          <Button onClick={handleLogout} variant="destructive">Logout</Button>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-md border border-border text-center">
          <h2 className="text-2xl font-semibold mb-4">Content Management Coming Soon!</h2>
          <p className="text-muted-foreground">
            This is where you'll be able to create, edit, and delete your blog posts.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;