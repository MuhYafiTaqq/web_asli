import Navbar from './components/Navbar';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='md:ml-60'>
        <main className="container md:mx-auto">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
