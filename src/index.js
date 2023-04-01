import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomePage } from '../src/pages/HomePage';
import { MyProfilePage } from '../src/pages/MyProfilePage';
import {SearcherPage} from '../src/pages/SearcherPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myProfile" element={<MyProfilePage />} />
          <Route path="/searcher" element={<SearcherPage />} />
        </Routes>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// https://api.unsplash.com/photos/?client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8