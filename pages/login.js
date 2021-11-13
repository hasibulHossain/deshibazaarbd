import React from "react";
import Login from "../components/LoginRegistration/Login";

export default function login() {
  return (
    <Login />
  );
}

export async function getStaticProps() {
  return {
    props: {}
  }
}