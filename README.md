# rc-message
a react notice ui component 

## Installation
```
npm install rc-message --save
```

## Example
### [Live Demo](https://lijinke666.github.io/rc-message/)

```
git clone https://github.com/lijinke666/rc-message
```
 - `yarn` of `npm install`
 - `npm run demo`   run example


## Usage
```javascript
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
```

## API 
- `Message.success(options)`
- `Message.error(options)`
- `Message.info(options)`
- `Message.warning(options)`
- `Message.loading(options)`
- `Message.confirm(options)`
- `Message.prompt(options)`

## Options 
- options.content
  - `Desc` : `content of the message`
  - `Type` : `string | ReactNode`
  - `Default` : `Balabala`

- options.duration 
  - `Desc` : `time before auto-dismiss,in seconds`
  - `Type` : `number`
  - `Default` : `2`

- options.theme 
  - `Desc` : `theme of the message`
  - `Type` : `string`
  - `Default` : `light`

- options.onClose 
  - `Desc` : `Specify a function that will be called after the message closed`
  - `Type` : `Function`
  - `Default` : `-`

## Special options
## Base Options of the `confirm()` and `prompt()`

- options.content
    - `Desc` : `content of the message`
    - `Type` : `string | ReactNode`
    - `Default` : `Balabala`

- options.okText 
    - `Desc` : `Text of the OK button`
    - `Type` : `string`
    - `Default` : `OK`

- options.cancelText 
    - `Desc` : `Text of the Cancel button`
    - `Type` : `string`
    - `Default` : `Cancel`

- options.onOk 
    - `Desc` : `Specify a function that will be called when a user clicked OK buttond`
    - `Type` : `Function`
    - `Default` : `-`
    
- options.onCancel 
    - `Desc` : `Specify a function that will be called when a user clicked mask, close button on top right or cancel button`
    - `Type` : `Function`
    - `Default` : `-`

- `Message.prompt(options)`
    - options.inputType
        - `Desc` : `input html type of the message`
        - `Type` : `string`
        - `Default` : `text`
    - options.placeholder 
        - `Desc` : `input placeholder of the message`
        - `Type` : `string`
        - `Default` : `-`


