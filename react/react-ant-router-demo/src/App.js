import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './page/Layout';
import 'antd/dist/antd.css';
// hashRouter # hashChange
// historyRouter 不带#  BrowserRouter 实现方式是通过h5的History api
// 刷新这个行为
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Route path="/" component={Layout} />
    </BrowserRouter>
    </div>
  );
}

export default App;
