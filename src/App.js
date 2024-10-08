import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./redux/store";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
