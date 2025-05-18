import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext);


  // console.log(autData.employees.taskStats.active)

  return (
    <div className="bg-[#1c1c1c] lg:p-5 p-0 lg:m-5 m-0 mt-7 rounded-md font-comic text-black h-full mb-5 text-xs lg:text-xl">
      <div className="flex justify-between rounded lg:py-2 py-0 lg:px-4 px-1 mb-4 bg-cyan-300 border-2 border-cyan-100 font-semibold gap-5 lg:gap-0">
        <h2 className="w-1/5 py-2 items-center flex text-center justify-center">Employee Name</h2>
        <h3 className="w-1/5 py-2 items-center flex text-center justify-center">New Task</h3>
        <h5 className="w-1/5 py-2 items-center flex text-center justify-center">Active Task</h5>
        <h5 className="w-1/5 py-2 items-center flex text-center justify-center">Completed</h5>
        <h5 className="w-1/5 py-2 items-center flex text-center justify-center">Failed</h5>
      </div>
      <div className="h-[80%]">
        {userData.employees.map((elem, idx) => {
          return (
            <div className="flex justify-between rounded bg-emerald-900 border-2 border-emerald-400  py-2 px-4 mb-4 items-center" key={idx}>
              <h2 className="text-white w-1/5 items-center flex text-center justify-center">{elem.firstName}</h2>
              <h3 className="text-orange-400 w-1/5 items-center flex text-center justify-center">{elem.taskStats.newTask}</h3>
              <h5 className="text-yellow-400 w-1/5 items-center flex text-center justify-center" >{elem.taskStats.active}</h5>
              <h5 className="text-green-400 w-1/5 items-center flex text-center justify-center" >{elem.taskStats.completed}</h5>
              <h5 className="text-red-400 w-1/5 items-center flex text-center justify-center" >{elem.taskStats.failed}</h5>
            </div>)
        })}
      </div>
    </div>
  )
}

export default AllTask
