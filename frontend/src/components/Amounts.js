import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const Amounts = (props) => {
  return (
    <>
      <ul>
        <li>
          Amount: <span>{props.amt.amount} INR</span>
        </li>
        <li>
          Service Tax@14%: <span>{props.amt.serviceTax} INR</span>
        </li>
        <li>
          Swachh Bharat Cess @0.5%: <span>{props.amt.sbCess} INR</span>
        </li>
        <li>
          Krishi Kalyan Cess @0.5%: <span>{props.amt.kkCess} INR</span>
        </li>
      </ul>
      <div className="total">
        {" "}
        Total Amount:{" "}
        <span>
          {props.amt.amount +
            props.amt.serviceTax +
            props.amt.sbCess +
            props.amt.kkCess}{" "}
          INR
        </span>
      </div>
    </>
  );
};

export default Amounts;
