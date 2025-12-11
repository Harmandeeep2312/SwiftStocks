import React from 'react';
import FundsPage from "../Components/FundsPage/FundsPage";
import OrdersPage from "../Components/OrdersPage/OrdersPage";
import HoldingsPage from "../Components/HoldingsPage/HoldingsPage";
import PositionsPage from "../Components/PositionsPage/PositionsPage";
import Summary from "../Components/SummaryPage/SummaryPage";

function DashBoardPage() {
    return (
        <div className='Dashboard-container'>
            <SideBar />
            <div className='Dashboard-contents'>
                <BrowserRouter>
                    <Routes>
                        <Route exact path = '/' element = {<Summary />}></Route>
                        <Route path = '/funds' element = {<FundsPage />}></Route>
                        <Route path = '/orders' element = {<OrdersPage />}></Route>
                        <Route path = '/holdings' element = {<HoldingsPage />}></Route>
                        <Route path = '/positions' element = {<PositionsPage />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
export default DashBoardPage;