import ListHeader from "./components/listHeader";
import { useEffect, useState } from 'react'
import ListItem from "./components/listItem";

const App = () => {
  const userEmail = 'aa@aa'
  const [tasks, editTasks] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      editTasks(json)
    }
    catch (err) {
      console.log(err)
    }

  }

  useEffect(() => getData, [])

  const sortedTasks = tasks?.sort((a, b) => new Date(a.datee) - new Date(b.date))


  return (
    <div className="app">
      <ListHeader listName={'primeiraLista'} getData={getData} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
    </div>
  );
}

export default App;
