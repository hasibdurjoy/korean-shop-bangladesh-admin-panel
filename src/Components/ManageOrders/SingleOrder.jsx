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
import { updateFunction } from "../../ApiCalls/CallApis";
import Swal from "sweetalert2";

const SingleOrder = ({ order, handleRefresh }) => {
  console.log(order);
  const updateStatus = (id) => {
    Swal.fire({
      title: "Are you sure? You want to approve order",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Confirm it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await updateFunction(`/orders/${id}`, {
            status: "approved",
          });
          console.log(res);
          if (res.status === 201 || 200) {
            handleRefresh();
            Swal.fire("Confirmed!", "Your  have confirmed order", "success");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const buttonStyle = {
    width: "40px",
    height: "40px",
    border: "1px solid black",
    backgroundColor: "transparent",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <TableRow
      style={{
        backgroundColor:
          order.status === "pending"
            ? "rgb(255 0 0 / 40%)"
            : "rgb(0 128 0 / 40%)",
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
            gap: "5px",
          }}
        >
          <Tooltip title="confirm order" placement="top-start">
            <button
              style={buttonStyle}
              disabled={order.status === "approved" ? true : false}
              onClick={() => {
                updateStatus(order._id);
              }}
            >
              <CheckIcon />
            </button>
          </Tooltip>
          <Tooltip title="view order" placement="top-start">
            <button style={buttonStyle}>
              <VisibilityIcon />
            </button>
          </Tooltip>
          <Tooltip title="edit order" placement="top-start">
            <button style={buttonStyle}>
              <EditIcon />
            </button>
          </Tooltip>
          <Tooltip title="delete order" placement="top-start">
            <button style={buttonStyle}>
              <DeleteIcon />
            </button>
          </Tooltip>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default SingleOrder;
