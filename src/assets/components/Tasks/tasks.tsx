
import Footer from "../Home page/footer/footer"
import Navbar from "../Home page/Navbar/navbar"
import TaskForm from "./AddTask/Taskadd"
import Hey from "./text_accueil/Hey"


const Tasks = () => {
  return (
    <div>
      <Navbar/>
      <Hey/>
      <TaskForm/>
      <Footer/>
    </div>
  )
}

export default Tasks
