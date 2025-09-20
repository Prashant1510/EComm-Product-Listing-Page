import Sidebar  from './pages/Sidebar'
import './App.css'
import Navbar from './components/Navbar'
import Content from './pages/Content'
import Contact from './components/Contact'
import SiteInfoFooter from './components/SiteInfoFooter'
function App() {

  return (
    <>
      <Navbar/>
      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        <Sidebar />
        <Content/>
      </div>
      <div>
        <Contact/>
        <SiteInfoFooter/>
      </div>
    </>
  )
}

export default App
