import React, { Component } from "react";
import Router from "next/router";

export function Index() {
  React.useEffect(() => {
    Router.push("/admin/dashboard");
  });

  return <div />;
}
