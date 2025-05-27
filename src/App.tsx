
import './App.css'
import Contact from './assets/components/contact/contact'
import Acueil from './assets/components/Home page/Acueil'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Tasks from './assets/components/Tasks/tasks'
import List from './assets/components/list/list'
function App() {
  

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Acueil/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path = '/list' element={<List/>}/>
      </Routes>
    </Router>
  )
}

export default App
