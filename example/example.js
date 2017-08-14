import React from "react"
import ReactDOM from "react-dom"
import Message from "../src/index"
import Button from "rc-button"


const Demo = () => (
    <div>
        <h2>Example</h2>
        <p><Button type="success" onClick={() => Message.success('success')}>success</Button></p>
        <p><Button type="warning" onClick={() => Message.warning('warning')}>primary</Button></p>
        <p><Button type="primary" onClick={() => Message.info('info')}>info</Button></p>
        <p><Button type="error" onClick={() => Message.error('error')}>error</Button></p>
        <p><Button type="primary" onClick={() => Message.loading('loading', 10)}>loading</Button></p>
        <p><Button type="primary" onClick={() => Message.info('duration', 100)}>10s duration</Button></p>
        <p><Button type="primary" onClick={() => Message.info('are you ready?', 3, () => Message.info('i am callback'))}>callback</Button></p>
    </div>
)
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)