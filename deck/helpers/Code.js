import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { darcula as themeSyntax } from "react-syntax-highlighter/styles/prism";
import pretty from "./pretty";

const loadCode = code => require(`!raw-loader!../snippets/${code}`);

export default ({ code, children }) => (
  <div style={{ padding: "0px" }}>
    <SyntaxHighlighter language="jsx" style={themeSyntax}>
      {pretty(children || loadCode(code))}
    </SyntaxHighlighter>
  </div>
);
