import { Button, Grid, Modal, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [addedOnCartModalOpen, setAddedOnCartModalOpen] = useState(false);

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
          >
            Edit
          </Button>
          <Button
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#e85d04" }}
          >
            Delete
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default Product;
