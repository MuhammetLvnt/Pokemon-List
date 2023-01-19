import React from "react";
import Header from "../components/Header";
import { UrlContextProvider } from "../contexts/UrlContext";

function Pages() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-100vh">
      <UrlContextProvider>
        <Header />
      </UrlContextProvider>
    </div>
  );
}

export default Pages;
