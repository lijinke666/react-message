# rc-message
[![npm](https://img.shields.io/npm/dm/rc-message.svg?style=flat-square)](https://www.npmjs.com/package/rc-message)
[![npm](https://img.shields.io/npm/l/rc-message.svg?style=flat-square)](https://www.npmjs.com/package/rc-message)
[![Build Status](https://travis-ci.org/lijinke666/rc-message.svg?branch=master)](https://travis-ci.org/lijinke666/rc-message)
[![npm version](https://img.shields.io/npm/v/rc-message.svg?style=flat-square)](https://badge.fury.io/js/rc-message)
[![Dependency Status](https://beta.gemnasium.com/badges/github.com/lijinke666/react-message.svg?style=flat-square)](https://beta.gemnasium.com/projects/github.com/lijinke666/react-message)

a message notice ui component for react

## Installation
> using `npm`
```
npm install rc-message --save
```
> using `yarn`
```
yarn add rc-message
```

## Screenshots

> ![success](https://github.com/lijinke666/react-message/blob/master/screenshots/success.png)
> ![confirm](https://github.com/lijinke666/react-message/blob/master/screenshots/confirm.png)
> ![prompt](https://github.com/lijinke666/react-message/blob/master/screenshots/prompt.png)
> ![dark](https://github.com/lijinke666/react-message/blob/master/screenshots/dark.png)

## Example
[https://lijinke666.github.io/react-message/](https://lijinke666.github.io/react-message/)


## Development

```
git clone https://github.com/lijinke666/react-message
npm install | yarn
npm start
open `http://localhost:3000/`
```


## Usage
```jsx
import Message from "rc-message"
Message.success({
    content:"hello world"
})
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
> Base Options of the `confirm()` and `prompt()`

- options.content
    - `Desc` : `content of the message`
    - `Type` : `string | ReactNode`
    - `Default` : `-`

- options.okText 
    - `Desc` : `Text of the OK button`
    - `Type` : `string`
    - `Default` : `Ok`

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


