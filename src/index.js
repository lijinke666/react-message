import React, { PropTypes } from "react"
import ReactDOM from "react-dom"
import classnames from "classnames"
import Success from "react-icons/lib/fa/check-circle"
import Error from "react-icons/lib/ti/delete"
import Warning from "react-icons/lib/ti/warning"
import Info from "react-icons/lib/ti/pin"
import Loading from "react-icons/lib/md/loop"

import "./styles.less"

export default class Message extends React.PureComponent {
    state = {
        remove: false
    }
    _container;         
    _dom;               
    constructor(props) {
        super(props)
    }
    static propTypes = {
        content:PropTypes.string.isRequired,
        duration:PropTypes.number.isRequired,
        theme:PropTypes.oneOf(['light','dark']),
        onClose:PropTypes.func
    }
    static defaultProps = {
        type:"info",
        content:"balabala",
        duration: 2,
        theme:"light",
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
        const { duration, onClose } = this.props
        setTimeout(() => {
            this.removeNode()
            onClose && onClose instanceof Function && onClose()
        }, duration * 1000)
    }
    removeNode = () => {
        ReactDOM.unmountComponentAtNode(this._container)
        this._dom.remove()
    }
    static renderElement = (type, {content ,duration  ,theme,onClose}) => {
        let div = document.createElement('div')
        let _message = ReactDOM.render(
            <Message
                type={type}
                content={content}
                duration={duration}
                theme={theme}
                onClose={onClose}
            />,
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
        this.renderElement("warning",options)
    }
    static loading(options) {
        this.renderElement("loading", options)
    }

    render() {
        const {
            theme,
            type,
            content,
            duration
         } = this.props
        const { remove } = this.state;

        const typeConfig = {
            info: "info",
            success: "success",
            error: "error",
            warning: "warning",
            loading: "loading"
        }

        const isShowClassName = type === typeConfig

        return (
            <div key="message" className={
                classnames(
                    "rc-message-notice-content",
                    {"theme-dark":theme === "dark"},
                    {"theme-light":theme === "light"}
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
                    <p className="icon">
                        {type === typeConfig['info'] ? <Info /> : undefined}
                        {type === typeConfig['success'] ? <Success /> : undefined}
                        {type === typeConfig['error'] ? <Error /> : undefined}
                        {type === typeConfig['warning'] ? <Warning /> : undefined}
                        {type === typeConfig['loading'] ? <Loading /> : undefined}
                    </p>
                    <p className="text">
                        {content}
                    </p>
                </div>
            </div>
        )
    }
}

