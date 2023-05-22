import React, { useState, useEffect } from "react";
import { apiKey, apiUrl } from "../../components/Constants/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Temperature from "../Temperature/Temperature";
function Weather() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`${apiUrl}?q=${query}&appid=${apiKey}`).then((response) => {
      if (response.status !== 200) {
        console.log("something went wrong");
        return false;
      }
      response.json().then((data) => {
        console.log(data);
        setWeather(data);
      });
    });
  }, [query]);
  return (
    <>
      <div
        className="card card-body shadow"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          className="form-control  form-control-sm"
          style={{ margin: "30px 0" }}
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          type="text"
          name=""
          id=""
          placeholder="Enter City here.."
        />
        <div className="row ">
          <h3 className="text-primary">
            My City: {weather?.name}
            <img
              className="cityImg"
              src="https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png"
              alt=""
            />
          </h3>
        </div>
      </div>
      <Temperature tempData={weather} />
    </>
  );
}

export default Weather;
