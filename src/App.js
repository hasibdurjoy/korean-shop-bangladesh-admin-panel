import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import AddNewProduct from "./Components/AddNewProduct/AddNewProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route exact path="/" element={<Products />} />
            <Route path="/manageProducts" element={<Products />} />
            <Route path="/manageOrders" element={<ManageOrders />} />
            <Route path="/addNewProduct" element={<AddNewProduct />} />
            {/* <Route path={`/dashboard/pay/:appointmentId`} element={<Payment />} />
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor /></AdminRoute>} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
