
import { useState } from 'react';
import FooterContact from './components/FooterContact';
import SiteInfoFooter from './components/SiteInfoFooter';
import FooterPaymentCards from './components/FooterPaymentCards';
import Sidebar from './pages/Sidebar';
import './App.css';
import Content from './pages/Content';
import Navbar from './components/Navbar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar/>
      <div className="flex flex-col md:flex-row gap-6 p-6 max-w-7xl mx-auto">
        {/* Sidebar for md+ screens */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* Sidebar as block at top for mobile */}
        {sidebarOpen && (
          <div className="block md:hidden w-full mb-4">
            <Sidebar onClose={() => setSidebarOpen(false)} isMobile={true} />
          </div>
        )}
        {/* Open sidebar button for small screens */}
       
        {/* Main content */}
        <div className="flex-1">
          <Content sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        </div>
      </div>
      <div>
        <FooterContact/>
        <SiteInfoFooter/>
        <FooterPaymentCards/>
      </div>
    </>
  );
}

export default App;
