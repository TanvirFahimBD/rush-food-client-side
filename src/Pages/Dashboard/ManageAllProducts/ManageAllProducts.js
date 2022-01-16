import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import "./ManageAllProducts.css";

const ManageAllProducts = () => {
  const [fullProducts, setFullProducts] = useState([]);
  useEffect(() => {
    fetch("https://lit-inlet-63211.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setFullProducts(data);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you really want to delete?");
    if (proceed) {
      const url = `https://lit-inlet-63211.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = fullProducts.filter(
              (item) => item._id !== id
            );
            setFullProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="mt-5 text-center">Manage Products</h1>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Image</TableCell>

              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fullProducts.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell component="th" scope="row">
                  <img
                    src={row.img}
                    alt=""
                    style={{
                      width: "50%",
                      height: "100px",
                      borderRadius: "10%",
                    }}
                  />
                </TableCell>

                <TableCell align="right">{row.price}</TableCell>

                <TableCell align="right">
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteProduct(row._id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAllProducts;
