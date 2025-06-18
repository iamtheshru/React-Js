import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar title="Dashboard" />
          <div>
            dashboard
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
