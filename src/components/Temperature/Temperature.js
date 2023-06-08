import React from "react";

export default function Temperature(props) {
  let data = props.tempData;
  let temp = data?.main.temp;
  console.log(data);
  return (
    temp && (
      <div className="row card card-body shadow mt-3">
        <h4 className="text-danger">
          Temperature:{(Number(temp) - 273).toFixed(2)} <sup>o</sup>C
        </h4>
        <img
          className="tempImg"
          src="https://img.freepik.com/premium-vector/celsius-fahrenheit-meteorology-thermometers_53562-2740.jpg"
          alt=""
        />
      </div>
    )
  );
}
