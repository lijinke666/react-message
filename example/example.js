import React from "react";
import ReactDOM from "react-dom";
import Message from "../src";
import "./example.less"

const success = () => Message.success({ content: "success" });
const warning = () => Message.warning({ content: "warning" });
const info = () => Message.info({ content: "info" });
const error = () => Message.error({ content: "error" });
const loading = () =>
  Message.loading({
    content: "loading",
    duration: 100
  });
const duration = () =>
  Message.success({
    content: "10s duration",
    duration: 10
  });
const onClose = () =>
  Message.info({
    content: "Are you ready?",
    duration: 3,
    onClose() {
      Message.info({ content: "i am callback :)" });
    }
  });

const confirm = () =>
  Message.confirm({
    content: "Are you a GAY ?",
    okText: "YES",
    cancelText: "NO",
    onOk() {
      Message.success({ content: "YES!!" });
    },
    onCancel() {
      Message.error({ content: "NO!!" });
    }
  });

const prompt = () =>
  Message.prompt({
    content: "Confirm password",
    inputType: "password",
    placeholder: "",
    onOk(value) {
      Message.success({ content: value });
    },
    onCancel() {
      Message.info({ content: "Cancel" });
    }
  });

const lightTheme = () =>
  Message.success({
    content: "i am light",
    theme: "light"
  });

const darkTheme = () =>
  Message.success({
    content: "i am dark",
    theme: "dark"
  });
const Demo = () => (
  <div>
    <h2>Example</h2>
    <p>
      <button onClick={success}>success</button>
    </p>
    <p>
      <button onClick={warning}>warning</button>
    </p>
    <p>
      <button onClick={info}>info</button>
    </p>
    <p>
      <button onClick={error}>error</button>
    </p>
    <p>
      <button onClick={loading}>loading</button>
    </p>
    <p>
      <button onClick={duration}>10s duration</button>
    </p>
    <p>
      <button onClick={onClose}>onClose</button>
    </p>
    <p>
      <button onClick={confirm}>confirm</button>
    </p>
    <p>
      <button onClick={prompt}>prompt</button>
    </p>

    <h2>Theme (dark | light)</h2>
    <p>
      <button onClick={lightTheme}>light theme</button>
    </p>
    <p>
      <button onClick={darkTheme}>dark theme</button>
    </p>
  </div>
);
ReactDOM.render(<Demo />, document.getElementById("root"));
