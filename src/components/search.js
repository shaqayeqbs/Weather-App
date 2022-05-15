import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = {
  key: "d9c5c38c32c56170b2fffa4f49d286ac",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Search = (props) => {
  const [query, setQuery] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result.cod, "code");
          if (result.cod == 404) {
            toast.error("شهرمورد نظر پیدا نشد");

            console.log("not found");
          } else {
            props.onAddWeather(result);
            setQuery("");
          }
        });
    }
  };
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="جستجو..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Search;
