import { useDispatch } from "react-redux";
import { toggleShowSideBar } from "../redux/appConfigSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toogleSideBar = () => {
    dispatch(toggleShowSideBar());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://tse4.mm.bing.net/th?id=OIP.9p-z5zqBkdA8t51iaBWo0wHaHa&pid=Api&P=0&h=180"
          onClick={toogleSideBar}
        />
        <a href="/">
          <img
            className="mx-2 h-8 cursor-pointer"
            alt="logo"
            src="https://1.bp.blogspot.com/-zaoiLHspoKI/XeI_0uFAeCI/AAAAAAAAF38/CyHgdY8bdOQ7d979yOJ0voSIA8b5bAF2wCLcBGAsYHQ/s1600/Youtube-Icon-2000x2000.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full px-5 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 px-10">
        <img
          className="h-8"
          alt="user-icon"
          src="https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png"
        />
      </div>
    </div>
  );
};

export default Head;
