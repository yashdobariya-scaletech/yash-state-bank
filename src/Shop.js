import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "./state/action-creater/index";
// import { bindActionCreators } from "redux";

export default function Shop() {
  const balance = useSelector((state) => state.amount);

  const disptach = useDispatch();
  return (
    <div>
      <h3>Deposit/Withdraw Money</h3>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          disptach(actionCreators.depositMoney(50));
        }}
      >
        -
      </button>
      Update Balance - {balance}
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          disptach(actionCreators.withdrawMoney(50));
        }}
      >
        +
      </button>
    </div>
  );
}
