import prettier from "prettier/standalone";
import babylon from "prettier/parser-babylon";

export default code =>
  prettier
    .format(code, {
      trailingComma: "es5",
      tabWidth: 4,
      semi: false,
      singleQuote: true,
      printWidth: 60,
      parser: "babylon",
      jsxBracketSameLine: true,
      plugins: [babylon]
    })
    .replace(/^;/, "");
