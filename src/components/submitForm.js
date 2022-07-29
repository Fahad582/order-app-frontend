import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context"
import axios from "axios";

function SubmitForm() {
    const { dispatchUserEvent } = useContext(AppContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const MaxDate = e.target.end_date.value;
        const MinDate = e.target.start_date.value;
        const MinSumOrder = parseFloat(e.target.quantity.value);
        console.log("sum:", MinSumOrder);
        console.log(
        "Max-Date : " + typeof MaxDate,
        "\n",
        "Min-Date : " + typeof MinDate,
        "\n",
        "Sum Order : " + typeof MinSumOrder,
        "\n"
    );
    axios({
      method: "get",
      url: `https://localhost:7087/api/Customers?MinSumOrder=${MinSumOrder}&MinDate=${MinDate}&MaxDate=${MaxDate}`,
    })
      .then((res) => {
        console.log("response", res.data);
        dispatchUserEvent("CREATE_DATA", { newData: res.data })
        navigate("/data")
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        action="GetSalesCustomersQuery"
        method="GET"
        className="submitForm"
      >
        <h2>Submit Form</h2>
        <input type="date" name="start_date" />
        <input type="date" name="end_date" />

        <input type="text" name="quantity" />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitForm;
