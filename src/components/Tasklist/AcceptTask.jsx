const AcceptTask = ({ data }) => {
  console.log(data)
  return (
    <div className="lg:w-[25%]  h-[60%] bg-cyan-300 flex-shrink-0 rounded-md w-[100%]">
      <div className="flex justify-between mx-5 items-center mt-5">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm text-black">{data.date}</h4>
      </div>
      <h2 className="mx-2 px-4 mt-5 text-black">{data.title}</h2>
      <p className="mx-2 px-4 mt-5 text-black">{data.description}</p>
      <div className='flex justify-between mt-5 mx-5 my-5'>
        <button className='bg-green-500 rounded-md px-2 py-1'>Mark as Completed</button>
        <button className='bg-red-500 rounded-md px-2 py-1'>Mark as Failed </button>
      </div>
    </div>
  )
}

export default AcceptTask
