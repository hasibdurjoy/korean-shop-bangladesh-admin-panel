import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import AddNewProduct from "./Components/AddNewProduct/AddNewProduct";
import Login from "./Components/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import useFirebase from "./hooks/useFirebase";
import NotAdmin from "./Components/NotAdmin/NotAdmin";
import Register from "./Components/Login/Register/Register";

function App() {
  const { user, admin } = useFirebase();

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/register"
              element={user.email ? <Home /> : <Register />}
            />
            <Route exact path="/" element={user.email ? <Home /> : <Login />}>
              <Route path="/" element={admin ? <Products /> : <NotAdmin />} />
              <Route
                path="/manageProducts"
                element={admin ? <Products /> : <NotAdmin />}
              />
              <Route
                path="/manageOrders"
                element={admin ? <ManageOrders /> : <NotAdmin />}
              />
              <Route
                path="/addNewProduct"
                element={admin ? <AddNewProduct /> : <NotAdmin />}
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
