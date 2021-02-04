import React, { Component } from "react";
import Router from "next/router";

export function _error() {
  React.useEffect(() => {
    Router.push("/admin/dashboard");
  });

  return <div />;
}
