import {
  Button,
  Grid,
  Modal,
  Paper,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const SingleOrder = ({ order }) => {
  console.log(order);
  return (
    <TableRow
      style={{
        backgroundColor: order.status === "pending" ? "red" : "green",
        color: "white",
      }}
    >
      <TableCell>{order.displayName}</TableCell>
      <TableCell>{order.phone}</TableCell>
      <TableCell align="center">{order.status}</TableCell>
      <TableCell>
        {order.products.map((prod) => {
          return <div>{prod.title}</div>;
        })}
      </TableCell>
      <TableCell align="center">
        {order.products.map((prod) => {
          return <div>{prod.orderQuantity}</div>;
        })}
      </TableCell>
      <TableCell align="center">
        {order.products.map((prod) => {
          return <div>{prod.discountPrice}</div>;
        })}
      </TableCell>
      <TableCell align="center">{order.totalPrice}</TableCell>
      <TableCell align="center">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Tooltip title="confirm order" placement="top-start">
            <CheckIcon />
          </Tooltip>
          <Tooltip title="view order" placement="top-start">
            <VisibilityIcon />
          </Tooltip>
          <Tooltip title="edit order" placement="top-start">
            <EditIcon />
          </Tooltip>
          <Tooltip title="delete order" placement="top-start">
            <DeleteIcon />
          </Tooltip>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default SingleOrder;
