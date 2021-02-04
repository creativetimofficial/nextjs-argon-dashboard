import React, { Component } from "react";
import Router from "next/router";

export default function Error404() {
  React.useEffect(() => {
    Router.push(
      (process.env.NODE_ENV === "production" ? "/nextjs-argon-dashboard" : "") +
        "/admin/dashboard"
    );
  });

  return <div />;
}
