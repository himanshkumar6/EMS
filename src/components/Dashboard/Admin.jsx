import AllTask from "../other/AllTask";
import Createtask from "../other/Createtask";
import Header from "../other/Header";

const Admin = ({ data }) => {
  return (
    <div className="lg:mx-15 mx-6">
      <Header data={data} />
      <Createtask />
      <AllTask />
    </div>
  );
};

export default Admin;
