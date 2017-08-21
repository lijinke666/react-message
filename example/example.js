import React from "react"
import ReactDOM from "react-dom"
import Message from "../src/index"
import Button from "rc-button"

const success = () => Message.success({ content: 'success' })
const warning = () => Message.warning({ content: 'warning' })
const info = () => Message.info({ content: 'info' })
const error = () => Message.error({ content: 'error' })
const loading = () => (
    Message.loading({
        content: 'loading',
        duration: 100
    })
)
const duration = () => (
    Message.success({
        content: '10s duration',
        duration: 10
    })
)
const onClose = () => (
    Message.info({
        content: 'Are you ready?',
        duration: 3,
        onClose(){
            Message.info({content:"i am callback :)"})
        }
    })
)

const confirm = ()=>(
    Message.confirm({
        content:"Are you a GAY ?",
        okText:"YES",
        cancelText:"NO",
        onOk(){
            Message.success({content:'YES!!'})
        },
        onCancel(){
            Message.error({content:"NO!!"})
        }
    })
)

const prompt = ()=>(
    Message.prompt({
        content:"Confirm password",
        inputType:"password",
        placeholder:"",
        onOk(value){
            Message.success({content:value})
        },
        onCancel(){
            Message.info({content:"Cancel"})
        }
    })
)

const lightTheme = () => (
    Message.success({
        conten: "i am light",
        theme: "light"
    })
)

const darkTheme = () => (
    Message.success({
        conten: "i am dark",
        theme: "dark"
    })
)
const Demo = () => (
    <div>
        <h2>Example</h2>
        <p><Button type="success" onClick={success}>success</Button></p>
        <p><Button type="warning" onClick={warning}>warning</Button></p>
        <p><Button type="primary" onClick={info}>info</Button></p>
        <p><Button type="error" onClick={error}>error</Button></p>
        <p><Button type="primary" onClick={loading}>loading</Button></p>
        <p><Button type="primary" onClick={duration}>10s duration</Button></p>
        <p><Button type="primary" onClick={onClose}>onClose</Button></p>
        <p><Button type="orange" onClick={confirm}>confirm</Button></p>
        <p><Button type="info" onClick={prompt}>prompt</Button></p>

        <h2>Theme (dark | light)</h2>
        <p><Button type="primary" onClick={lightTheme}>light theme</Button></p>
        <p><Button type="primary" onClick={darkTheme}>dark theme</Button></p>
    </div>
)
ReactDOM.render(
    <Demo />,
    document.getElementById('root')
)