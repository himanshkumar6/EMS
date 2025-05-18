
const Header = ({ data }) => {
  return (
    <div className="flex justify-between items-center py-5">
      <h1 className="font-light">Hello, <br /> <span className="font-bold  text-2xl font-comic">{data.firstName} 👋</span></h1>
    </div>
  )
}

export default Header
