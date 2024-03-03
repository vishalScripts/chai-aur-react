
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import Layout from "../../07reactRouter/src/Layout";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Outlet/>
    </UserContextProvider>
  );
}

export default App;
