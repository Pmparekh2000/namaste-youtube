import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SideBar from "./Sidebar";

const Body = () => {
  const showSideBar = useSelector((store) => store?.appConfig.showSideBar);
  return (
    <div className="grid grid-flow-col">
      {showSideBar ? <SideBar /> : <></>}
      <MainContainer />
    </div>
  );
};

export default Body;
