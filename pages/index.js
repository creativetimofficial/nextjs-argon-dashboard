import React, { Component } from "react";
import Router from "next/router";

export default class Index extends Component {
  componentDidMount = () => {
    Router.push(
      (process.env.NODE_ENV === "production" ? "/nextjs-argon-dashboard" : "") +
        "/admin/dashboard"
    );
  };

  render() {
    return <div />;
  }
}
