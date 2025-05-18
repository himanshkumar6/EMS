import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider";

const Createtask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()
    setNewTask({ taskTitle, taskDescription, taskDate, assignTo, category, active: false, newTask: true, failed: false, completed: false })

    const data = userData

    userData.employees.forEach((elem) => {
      if (assignTo == elem.firstName)
        elem.tasks.push(newTask)
      elem.taskStats.newTask += elem.taskStats.newTask
    });

    setUserData(data)
    console.log(data)


    settaskTitle('')
    settaskDescription('')
    setTaskDate('')
    setassignTo('')
    setCategory('')
  }


  return (
    <div>
      <form className="mt-10 border-2 border-gray-600 rounded-xl bg-[#1c1c1c] p-2 lg:p-8 text-white font-comic" onSubmit={(e) => submitHandler(e)} >
        <div className="flex flex-col gap-6 text-lg lg:text-lg m-6">
          {/* Task Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label htmlFor="title" className="w-32 font-semibold">
              Task Title:
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter the title"
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value)
              }}
              className="flex-1 px-4 py-2 border border-gray-500 bg-transparent rounded placeholder:text-white"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label htmlFor="date" className="w-32 font-semibold">
              Date:
            </label>
            <input
              id="date"
              type="date"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value)
              }}
              className="flex-1 px-4 py-2 border border-gray-500 bg-transparent rounded"
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label htmlFor="assignee" className="w-32 font-semibold">
              Assign to:
            </label>
            <input
              id="assignee"
              type="text"
              placeholder="Employee name"
              value={assignTo}
              onChange={(e) => {
                setassignTo(e.target.value)
              }}
              className="flex-1 px-4 py-2 border border-gray-500 bg-transparent rounded placeholder:text-white"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label htmlFor="category" className="w-32 font-semibold">
              Category:
            </label>
            <input
              id="category"
              type="text"
              placeholder="Design, Dev, Graphics, etc."
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
              className="flex-1 px-4 py-2 border border-gray-500 bg-transparent rounded placeholder:text-white"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label htmlFor="description" className="w-32 font-semibold">
              Description:
            </label>
            <textarea
              id="description"
              placeholder="Enter the description"
              value={taskDescription}
              onChange={(e) => {
                settaskDescription(e.target.value)
              }}
              className="flex-1 px-4 py-2 border border-gray-500 bg-transparent rounded placeholder:text-white min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              className="px-6 py-2 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all cursor-pointer"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Createtask
