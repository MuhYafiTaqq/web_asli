import Navbar from './components/Navbar';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="container">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
