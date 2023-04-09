import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomePage } from '../src/pages/HomePage';

import { MyProfilePage } from '../src/pages/MyProfilePage';
import {SearcherPage} from '../src/pages/SearcherPage';
import {InfoPage} from './pages/InfoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import {FavoriteSearcherPage} from './pages/FavoriteSearcherPage'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searcher" element={<SearcherPage />} />

          <Route path="/myProfile" element={<MyProfilePage />}/>
          <Route path='/myProfile/info' element={<InfoPage/>} />
          <Route path='/myProfile/searcher' element={<FavoriteSearcherPage/>} />  
          
        </Routes>
      </HashRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// https://api.unsplash.com/photos/?client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8