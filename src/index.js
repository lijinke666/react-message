import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cls from "classnames";

import Success from "react-icons/lib/fa/check-circle";
import Error from "react-icons/lib/ti/delete";
import Warning from "react-icons/lib/ti/warning";
import Info from "react-icons/lib/ti/pin";
import Loading from "react-icons/lib/fa/spinner";

const prefix = "rc-message";
export default class RcMessage extends PureComponent {
  state = {
    visible: true,
    value: ""
  };
  _container;
  _dom;
  constructor(props) {
    super(props);
    this.typeConfig = {
      info: "info",
      success: "success",
      error: "error",
      warning: "warning",
      loading: "loading",
      confirm: "confirm",
      prompt: "prompt"
    };
    this.animationTime = 450;
  }
  static propTypes = {
    content: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    theme: PropTypes.oneOf(["light", "dark"]),
    onClose: PropTypes.func,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    inputType: PropTypes.string,
    placeholder: PropTypes.string
  };
  static defaultProps = {
    okText: "Ok",
    cancelText: "Cancel",
    type: "info",
    content: "",
    duration: 2,
    theme: "light",
    inputType: "text"
  };
  componentWillunmount() {
    document.body.removeChild(document.querySelector(`.${prefix}`));
  }
  createContainer() {
    const container = Array.from(document.querySelectorAll(`.${prefix}`));
    if (container.length < 1) {
      const div = document.createElement("div");
      div.className = prefix;
      document.body.appendChild(div);
    }
  }
  componentDidMount() {
    this.createContainer();
    const { duration, onClose, type } = this.props;
    if (
      type !== this.typeConfig["confirm"] &&
      type !== this.typeConfig["prompt"]
    ) {
      this.timer = setTimeout(() => {
        this.setState({ visible: false }, () => {
          setTimeout(() => {
            this.removeNode();
          }, this.animationTime);
          onClose && onClose();
        });
      }, duration * 1000);
    }
  }
  onOk = () => {
    const { onOk } = this.props;
    const { value } = this.state;
    this.removeNode();
    onOk && onOk(value);
  };
  onCancel = () => {
    const { onCancel } = this.props;
    this.removeNode();
    onCancel && onCancel();
  };
  onInpChange = e => {
    this.setState({ value: e.target.value });
  };
  removeNode = () => {
    ReactDOM.unmountComponentAtNode(this._container);
    this._dom.remove();
  };
  static renderElement = (type, params) => {
    let div = document.createElement("div");
    let _message = ReactDOM.render(<RcMessage type={type} {...params} />, div);
    let dom = document.querySelector(`.${prefix}`).appendChild(div);
    _message._container = div;
    _message._dom = dom;
  };
  static error(options) {
    this.renderElement("error", options);
  }
  static info(options) {
    this.renderElement("info", options);
  }
  static success(options) {
    this.renderElement("success", options);
  }
  static warning(options) {
    this.renderElement("warning", options);
  }
  static loading(options) {
    this.renderElement("loading", options);
  }
  static confirm(options) {
    this.renderElement("confirm", options);
  }
  static prompt(options) {
    this.renderElement("prompt", options);
  }
  render() {
    const {
      theme,
      type,
      content,
      okText,
      cancelText,
      inputType,
      placeholder
    } = this.props;

    const { visible } = this.state;

    const typeConfig = this.typeConfig;

    const isPrompt = type === typeConfig["prompt"];

    return (
      <div
        key="message"
        className={cls(
          `${prefix}-content`,
          { "theme-dark": theme === "dark" },
          { "theme-light": theme === "light" },
          { open: visible },
          { close: !visible }
        )}
      >
        <div
          className={cls(
            `${prefix}-content-custom`,
            `message-${typeConfig[type]}`
          )}
        >
          {isPrompt ? (
            undefined
          ) : (
            <p className="icon">
              {type === typeConfig["info"] ? <Info /> : undefined}
              {type === typeConfig["success"] ? <Success /> : undefined}
              {type === typeConfig["error"] ? <Error /> : undefined}
              {type === typeConfig["warning"] ? <Warning /> : undefined}
              {type === typeConfig["loading"] ? <Loading /> : undefined}
              {type === typeConfig["confirm"] ? <Warning /> : undefined}
            </p>
          )}

          <p className="text">
            {isPrompt ? <Info /> : undefined}
            <span className="title">{content}</span>
          </p>
          {isPrompt ? (
            <p className="input">
              <input
                type={inputType}
                placeholder={placeholder}
                onChange={this.onInpChange}
                className="prompt-input"
              />
            </p>
          ) : (
            undefined
          )}
          {type === typeConfig["confirm"] || isPrompt ? (
            <div className="confirm-footer">
              <button
                className="btn confirm-btn btn-default"
                onClick={this.onCancel}
              >
                <span>{cancelText}</span>
              </button>
              <button
                className="btn confirm-btn btn-primary"
                onClick={this.onOk}
              >
                <span>{okText}</span>
              </button>
            </div>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}
