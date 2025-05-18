import Header from "../other/Header"
import TaskNumber from "../other/TaskNumber"
import TaskList from "../TaskList"

const Dashboard = ({ data }) => {
  console.log(data)
  return (
    <div className="p-10 h-screen bg-[#1c1c1c]">
      <Header data={data} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default Dashboard
