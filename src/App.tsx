import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Books, Dashboard, Habits, Tasks } from './pages';
import { Navbar, Sidebar } from './components';
import { ROUTES } from './routes';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar /> {/* Full-width top bar */}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar /> {/* Left column */}
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path={ROUTES.dashboard} element={<Dashboard />} />
              <Route path={ROUTES.books} element={<Books />} />
              <Route path={ROUTES.habits} element={<Habits />} />
              <Route path={ROUTES.tasks} element={<Tasks />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
