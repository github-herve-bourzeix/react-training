// https://codesandbox.io/s/7kxmpvxky0
import React from "react";

const { Provider, Consumer } = React.createContext({ lang: "fr" });

const localizeMessage = (lang, key) => {
  const i18n = {
    key1: {
      fr: "bonjour",
      es: "hola",
      en: "hello"
    }
  };
  return i18n[key][lang];
};

const Message = ({ i18nKey }) => (
  <Consumer>{({ lang }) => localizeMessage(lang, i18nKey)}</Consumer>
);

function App() {
  return (
    <Provider value={{ lang: "es" }}>
      <div className="App">
        <h1>
          My message : <Message i18nKey="key1" />
        </h1>
      </div>
    </Provider>
  );
}
