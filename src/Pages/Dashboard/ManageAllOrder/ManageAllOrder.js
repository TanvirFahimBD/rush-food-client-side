import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);

  useEffect(() => {
    fetch("https://lit-inlet-63211.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrderedProducts(data);
        console.log(data);
      });
  }, []);

  const handleUpdate = (id) => {
    console.log("id", id);
    // const currentStatus = { status: status };
    fetch(`https://lit-inlet-63211.herokuapp.com/updateOrders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert(`Order ${status}`);
        }
      });
  };

  return (
    <div>
      <h1 className="mt-5 text-center">All Ordered Products</h1>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Order Name</TableCell>
              <TableCell align="right">Order Price</TableCell>

              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedProducts.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  <img
                    src={row.img}
                    alt=""
                    style={{
                      width: "50%",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <input
                    onChange={handleStatus}
                    type="text"
                    defaultValue={row.status}
                  />
                </TableCell>
                <TableCell align="right">
                  <button
                    className="btn-ship"
                    onClick={() => handleUpdate(row._id)}
                  >
                    Update
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

export default ManageAllOrder;
