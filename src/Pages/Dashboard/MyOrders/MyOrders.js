import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const email = user.email;
  console.log(email);
  const [userOrder, setUserOrder] = useState([]);
  useEffect(() => {
    fetch(`https://lit-inlet-63211.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserOrder(data);
      });
  }, []);

  const handleCancelOrder = (id) => {
    const proceed = window.confirm("Are you really want to delete?");
    if (proceed) {
      const url = `https://lit-inlet-63211.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingOrder = userOrder.filter(
              (orderCurrent) => orderCurrent._id !== id
            );
            setUserOrder(remainingOrder);
          }
        });
    }
  };

  return (
    <div className="my-5">
      <h1 className="text-center mb-4">My total {userOrder.length} Orders</h1>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", fontSize: "25px" }}>
                Email
              </TableCell>
              <TableCell
                align="left"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                Product Name
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                Price
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                Image
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                Date
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrder.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>

                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <img
                    src={row.img}
                    alt=""
                    style={{
                      width: "60%",
                      height: "70px",
                      borderRadius: "10%",
                    }}
                  />
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">
                  <button
                    className="btn-delete"
                    onClick={() => handleCancelOrder(row?._id)}
                  >
                    Cancel
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

export default MyOrders;
