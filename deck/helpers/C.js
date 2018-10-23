import React from "react";
import pretty from "./pretty";
import { CodeSurfer } from "mdx-deck-code-surfer";

export default ({ code, file, children, steps, ...others }) => (
  <CodeSurfer
    code={
      children || code
        ? pretty(children || code)
        : require(`!raw-loader!../snippets/${file}`)
    }
    steps={steps}
    {...others}
  />
);
