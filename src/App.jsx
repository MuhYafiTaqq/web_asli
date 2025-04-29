import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
