import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import EnquireButton from "../components/EnquireButton";

export default function HomeLayout() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
        <WhatsApp />
        <EnquireButton />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}
