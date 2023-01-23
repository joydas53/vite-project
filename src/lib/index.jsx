import React from "react";
import PropTypes from "prop-types";
import DotGraph from "../dotgraph";
export default function HelloWorld(props) {
  const { greetee = [{ x: 5, y: 10, color: "cyan" }] } = props;
  return <DotGraph props={greetee} />;
}

HelloWorld.propTypes = {
  greetee: PropTypes.array,
};