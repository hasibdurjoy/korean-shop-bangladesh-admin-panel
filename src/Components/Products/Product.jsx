import { Button, Grid, Modal, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteFunction } from "../../ApiCalls/CallApis";
import ProductEditModal from "./ProductEditModal";

const Product = ({ product, handleRefresh }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [addedOnCartModalOpen, setAddedOnCartModalOpen] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteFunction(`/products/${id}`);
        console.log(res);
        if (res.status === 200 || 201) {
          handleRefresh();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  return (
    <Grid item xs={12} md={3}>
      <Paper
        variant="outlined"
        sx={{ p: 2, cursor: "pointer" }}
        onClick={(e) => {
          e.stopPropagation();
          // navigate(`/product/${product._id}`);
          window.scrollTo(0, 0);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={product.img}
            alt=""
            style={{ height: "300px", width: "100%", alignItems: "center" }}
          />
        </div>
        <hr />
        <h6>{product.title}</h6>
        {/* <StarRatings
          rating={product.rating}
          starRatedColor="#e85d04"
          starDimension="20px"
          starSpacing="5px"
        /> */}
        <div>
          Price :{" "}
          <span
            style={{
              textDecoration: "line-through",
              textAlign: "start",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            TK {product.price}/{product.quantity}
          </span>
        </div>
        <div>
          Discount Price :{" "}
          <span style={{ color: "#e85d04", fontWeight: 600 }}>
            {product.discountPrice}{" "}
            <span style={{ fontSize: "20px", color: "black" }}>
              /{product.quantity}
            </span>
          </span>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            style={{ borderColor: "#e85d04", color: "black" }}
            onClick={() => {
              handleOpen();
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#e85d04" }}
            onClick={() => {
              handleDelete(product._id);
            }}
          >
            Delete
          </Button>
        </div>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductEditModal
          product={product}
          handleRefresh={handleRefresh}
          handleClose={handleClose}
        />
      </Modal>
    </Grid>
  );
};

export default Product;
