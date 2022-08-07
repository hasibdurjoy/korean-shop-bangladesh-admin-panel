import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFunction } from "../../ApiCalls/CallApis";
import SingleOrder from "./SingleOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleRefresh = () => {
    setCounter(counter + 1);
  };

  const getAllOrders = async () => {
    try {
      const orders = await getFunction("/orders");
      setOrders(orders.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllOrders();
  }, [counter]);
  return (
    <div>
      <TableContainer sx={{ maxHeight: "90vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="center">Order Status</TableCell>
              <TableCell>Products</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Total Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              return (
                <SingleOrder
                  key={order._id}
                  order={order}
                  handleRefresh={handleRefresh}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageOrders;
