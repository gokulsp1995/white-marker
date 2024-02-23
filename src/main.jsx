import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#48D100',
            borderRadius: 0,
            colorBorder: '#2C313F',
            colorTextPlaceholder: '#4D5153',
            fontFamily: 'VisbyRegular'
          },
        }}
      >
        <StyleProvider hashPriority='low'>
          <App />
        </StyleProvider>
      </ConfigProvider>
    </Router>
  </React.StrictMode>,
)