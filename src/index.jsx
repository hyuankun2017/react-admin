import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
// import { DatePicker } from 'antd'
import App from '@R/index'
import * as serviceWorker from './serviceWorker'


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
