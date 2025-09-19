import Sidebar  from './pages/Sidebar'
import './App.css'
import Navbar from './components/Navbar'
import Content from './pages/Content'
function App() {

  return (
    <>
      <Navbar/>
      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        <Sidebar />
        <Content/>
      </div>
    </>
  )
}

export default App
