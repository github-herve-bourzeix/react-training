import React from "react";
import C from "./C";

export const __ = ({ children }) => children;
export default (...props) => ([code]) => <C {...props} code={code} />;
