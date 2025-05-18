import FailedTask from './Tasklist/FailedTask'
import CompleteTask from './Tasklist/CompleteTask'
import NewTask from './Tasklist/NewTask'
import AcceptTask from './Tasklist/AcceptTask'



const TaskList = ({ data }) => {
  const tasks = data.tasks;
  console.log(tasks)
  return (
    <div className="lg:h-[65%] rounded-2xl mt-32 lg:mt-10 mx-auto lg:mx-7 flex justify-start overflow-x-auto items-center gap-5 flex-col lg:flex-row font-comic bg-[#1c1c1c]" id='tasklist'>
      {tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  );
};

export default TaskList;
