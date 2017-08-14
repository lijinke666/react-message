import React, { propTypes } from "react"
import ReactDOM from "react-dom"
import classNames from "classnames"
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
    static defaultProps = {
        defaultDuration: 2,
        defaultContent: "提示"
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
    static renderElement = (type, content = "提示", duration = 2, onClose) => {
        let div = document.createElement('div')
        let _message = ReactDOM.render(
            <Message
                type={type}
                content={content}
                duration={duration}
                onClose={onClose}
            />,
            div
        )
        let dom = document.querySelector(".rc-message").appendChild(div)
        _message._container = div
        _message._dom = dom
    }
    static error(content, duration, onClose) {
        this.renderElement("error", content, duration, onClose)
    }
    static info(content, duration, onClose) {
        this.renderElement("info", content, duration, onClose)
    }
    static success(content, duration, onClose) {
        this.renderElement("success", content, duration, onClose)
    }
    static warning(content, duration, onClose) {
        this.renderElement("warning", content, duration, onClose)
    }
    static loading(content, duration, onClose) {
        this.renderElement("loading", content, duration, onClose)
    }

    render() {
        const {
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
            <div key="message" className="rc-message-notice-content">
                <div
                    className={
                        classNames(
                            'rc-message-notice-content-custom',
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

