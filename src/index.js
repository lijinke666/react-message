import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import classnames from "classnames"

import Success from "react-icons/lib/fa/check-circle"
import Error from "react-icons/lib/ti/delete"
import Warning from "react-icons/lib/ti/warning"
import Info from "react-icons/lib/ti/pin"
import Loading from "react-icons/lib/md/loop"


export default class Message extends PureComponent {
    state = {
        remove: false,
        value:""
    }
    _container;
    _dom;
    constructor(props) {
        super(props)
        this.typeConfig = {
            info: "info",
            success: "success",
            error: "error",
            warning: "warning",
            loading: "loading",
            confirm: "confirm",
            prompt: "prompt",
        }
    }
    static propTypes = {
        content: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        theme: PropTypes.oneOf(['light', 'dark']),
        onClose: PropTypes.func,
        onOk: PropTypes.func,
        onCancel: PropTypes.func,
        inputType:PropTypes.string,
        placeholder:PropTypes.string
    }
    static defaultProps = {
        okText: "OK",
        cancelText: "Cancel",
        type: "info",
        content: "balabala",
        duration: 2,
        theme: "light",
        inputType:"text"
    }
    componentWillUnMount() {
        document.body.removeChild(document.querySelector('.rc-message'))
    }
    createContainer() {
        const container = Array.from(document.querySelectorAll('.rc-message'))
        if (container.length < 1) {
            const div = document.createElement('div')
            div.className = "rc-message"
            document.body.appendChild(div)
        }

    }
    componentDidMount() {
        this.createContainer()
        const { duration, onClose, type } = this.props
        if (type !== this.typeConfig['confirm'] && type !== this.typeConfig['prompt']) {
            setTimeout(() => {
                this.removeNode()
                onClose && onClose instanceof Function && onClose()
            }, duration * 1000)
        }
    }
    onOk = () => {
        const { onOk } = this.props
        const {value} = this.state
        this.removeNode()
        onOk && onOk(value)
    }
    onCancel = () => {
        const { onCancel } = this.props
        this.removeNode()
        onCancel && onCancel()
    }
    onInpChange = (e)=>{
        this.setState({value:e.target.value})
    }
    removeNode = () => {
        ReactDOM.unmountComponentAtNode(this._container)
        this._dom.remove()
    }
    static renderElement = (type, params) => {
        let div = document.createElement('div')
        let _message = ReactDOM.render(
            <Message type={type} {...params} />,
            div
        )
        let dom = document.querySelector(".rc-message").appendChild(div)
        _message._container = div
        _message._dom = dom
    }
    static error(options) {
        this.renderElement("error", options)
    }
    static info(options) {
        this.renderElement("info", options)
    }
    static success(options) {
        this.renderElement("success", options)
    }
    static warning(options) {
        this.renderElement("warning", options)
    }
    static loading(options) {
        this.renderElement("loading", options)
    }
    static confirm(options) {
        this.renderElement("confirm", options)
    }
    static prompt(options) {
        this.renderElement("prompt", options)
    }
    render() {
        const {
            theme,
            type,
            content,
            duration,
            okText,
            cancelText,
            onOk,
            onCancel,
            inputType,
            placeholder
         } = this.props

        const { remove } = this.state

        const typeConfig = this.typeConfig

        const isPrompt = type === typeConfig['prompt']

        return (
            <div key="message" className={
                classnames(
                    "rc-message-notice-content",
                    { "theme-dark": theme === "dark" },
                    { "theme-light": theme === "light" }
                )
            }>
                <div
                    className={
                        classnames(
                            "rc-message-notice-content-custom",
                            `message-${typeConfig[type]}`
                        )
                    }

                >
                    {
                        isPrompt
                            ? undefined
                            : (
                                <p className="icon">
                                    {type === typeConfig['info'] ? <Info /> : undefined}
                                    {type === typeConfig['success'] ? <Success /> : undefined}
                                    {type === typeConfig['error'] ? <Error /> : undefined}
                                    {type === typeConfig['warning'] ? <Warning /> : undefined}
                                    {type === typeConfig['loading'] ? <Loading /> : undefined}
                                    {type === typeConfig['confirm'] ? <Warning /> : undefined}
                                </p>
                            )
                    }

                    <p className="text">
                        {
                            isPrompt ? <Info/> : undefined
                        }
                        <span className="title">{content}</span>
                    </p>
                    {
                        isPrompt 
                        ? <p className="input">
                            <input type={inputType} placeholder={placeholder} onChange={this.onInpChange} className="prompt-input"/>
                          </p>
                        : undefined
                    }
                    {
                        (type === typeConfig['confirm'] || isPrompt)
                            ? (
                                <div className='confirm-footer'>
                                    <button className="btn confirm-btn" onClick={this.onCancel}>{cancelText}</button>
                                    <button className="btn confirm-btn primary-btn"  onClick={this.onOk}>{okText}</button>
                                </div>
                            )
                            : undefined
                    }
                </div>
            </div>
        )
    }
}

