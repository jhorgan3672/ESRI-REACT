import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebMapView from './components/WebMapView';
import AppNavbar from './components/AppNavbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <AppNavbar />
      <div className="rowC">
      <Sidebar />
      <WebMapView />

      </div>
      
    </div>
  );
}

export default App;
