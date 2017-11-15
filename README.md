# rc-message
a message notice ui component for react

## Installation
```
npm install rc-message --save
```

## Example
### [https://lijinke666.github.io/rc-message/](https://lijinke666.github.io/rc-message/)


## Development

```
git clone https://github.com/lijinke666/rc-message
npm install
npm start
```


## Usage
```jsx
import React from "react"
import ReactDOM from "react-dom"
import Message from "rc-message"
import "rc-message/asstes/index.css"

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
        <p><button onClick={success}>success</button></p>
        <p><button onClick={warning}>warning</button></p>
        <p><button onClick={info}>info</button></p>
        <p><button onClick={error}>error</button></p>
        <p><button onClick={loading}>loading</button></p>
        <p><button onClick={duration}>10s duration</button></p>
        <p><button onClick={onClose}>onClose</button></p>
        <p><button onClick={confirm}>confirm</button></p>
        <p><button onClick={prompt}>prompt</button></p>

        <h2>Theme (dark | light)</h2>
        <p><button onClick={lightTheme}>light theme</button></p>
        <p><button onClick={darkTheme}>dark theme</button></p>
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


