import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import DashBoardLayout from "./DashBoardPage/DashBoardLayout/DashboardPage"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path = '/*' element = {<DashBoardLayout />}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

