const NewTask = ({ data }) => {
  return (
    <div className="lg:w-[25%]  h-[60%] bg-cyan-300 flex-shrink-0 rounded-md w-[100%]">
      <div className="flex justify-between mx-5 items-center mt-5">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm text-black">{data.date}</h4>
      </div>
      <h2 className="mx-2 px-4 mt-5 text-black">{data.title}</h2>
      <p className="mx-2 px-4 mt-5 text-black">{data.description}</p>
      <div className='flex justify-center mt-5 mx-5 my-5'>
        <h2 className='bg-yellow-500 rounded-md px-2 py-1'>Accept Task </h2>
      </div>
    </div>
  )
}

export default NewTask
