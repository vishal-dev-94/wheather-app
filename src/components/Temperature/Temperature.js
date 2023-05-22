import React from "react";

export default function Temperature(props) {
  let data = props.tempData;
  console.log(data);
  return (
    <div className="row card card-body shadow mt-3">
      <h4 className="text-danger">
        Temperature:{data?.main.temp} <sup>o</sup>C
        <img
          className="tempImg"
          src="https://img.freepik.com/premium-vector/celsius-fahrenheit-meteorology-thermometers_53562-2740.jpg?w=740"
          alt=""
        />
      </h4>
    </div>
  );
}
