const TaskNumber = ({ data }) => {
  return (
    <div className="flex justify-center gap-5 mt-6 screen  mx-8 font-semibold flex-wrap lg:flex-nowrap font-comic">
      <div className="lg:w-[45%] w-[100%] bg-blue-400 py-6 px-9 rounded-2xl">
        <h2 className="text-2xl text-black">{data.taskStats.newTask}</h2>
        <h3 className="text-xl text-black">New task</h3>
      </div>
      <div className="lg:w-[45%] w-[100%] bg-emerald-400 py-6 px-9 rounded-2xl">
        <h2 className="text-2xl text-black">{data.taskStats.completed}</h2>
        <h3 className="text-xl text-black">Completed Task</h3>
      </div>
      <div className="lg:w-[45%] w-[100%] bg-yellow-400 py-6 px-9 rounded-2xl">
        <h2 className="text-2xl text-black">{data.taskStats.active}</h2>
        <h3 className="text-xl text-black">Active Task</h3>
      </div>
      <div className="lg:w-[45%] w-[100%] bg-orange-400 py-6 px-9 rounded-2xl">
        <h2 className="text-2xl text-black">{data.taskStats.failed}</h2>
        <h3 className="text-xl text-black">Failed task</h3>
      </div>
    </div>
  )
}

export default TaskNumber
