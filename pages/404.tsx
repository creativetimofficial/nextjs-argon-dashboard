import React, { Component } from "react";
import Router from "next/router";

export default function Error404() {
  React.useEffect(() => {
    Router.push("/admin/dashboard");
  });

  return <div />;
}
