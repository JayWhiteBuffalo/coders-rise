import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Home from "./components/Home";
import EventBus from "./common/EventBus";
import Navbar from "./components/Navbar";



function Home() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();

    setCurrentUser(undefined);
  };

  return (
    <div>
    <Navbar logout={logOut} user={currentUser} />
    <main className="container">
      <div className="bg-light p-5 rounded">
        <h1>College Explorer Platform</h1>
        <p className="lead">Blurb about College Explorer Platform...</p>
        <a className="btn btn-lg btn-primary" href="/search" role="button">
          Find Colleges Now &raquo;
        </a>
      </div>
    </main>
    </div>
  );
}

export default Home;