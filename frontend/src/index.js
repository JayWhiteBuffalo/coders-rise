
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./routes/Search";
import Favorites from "./routes/Favorites";
import Account from "./routes/Account";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm";
import ReactDOM from "react-dom/client";
import Contact from "./routes/Contact";
import "./index.css";
import App from "./App";
import RegisterThankYou from "./routes/RegisterThankYou";
import reportWebVitals from "./reportWebVitals";
import Profile from "./components/Profile";

import "bootstrap/dist/css/bootstrap.css";
//import EditFavorite from "./routes/Edit";
import Edit from "./routes/Edit";
import ThankYou from "./routes/ThankYou";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="search" element={<Search />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="favorites/:id" element={<Edit />} />
      <Route path="account" element={<Account />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="thankYou" element={<ThankYou />} />
      <Route path="home" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="register" element={<Register />} />
      <Route path="registerThankYou" element={<RegisterThankYou/>} />
      <Route path="*" element={<h1>Route does not exist</h1>} />
    </Routes>
  </BrowserRouter>
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
