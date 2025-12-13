import { watchlist } from "../../Data/Data"
import WatchListItem from "./WatchListItem";


function WatchList() {
    return (
        <>
            <div className='watchlist-header'>
                <div className='search-container'>
                    <input 
                        type="text"
                        name="search"
                        id='search'
                        placeholder='Search eg:infy, bse, nifty fut weekly, gold mcx'
                        className='search'
                    />
                    <span className='"counts'>{watchlist.length}/50</span>
                </div>
                <div className="watchlist-list">
                <ul className='list'>
                    {watchlist.map((stock,index)=>{
                        return(
                            <WatchListItem stock= {stock} key = {index} />
                        );
                    })}
                </ul>
            </div>
            </div>
        </>
    );
}
export default WatchList;