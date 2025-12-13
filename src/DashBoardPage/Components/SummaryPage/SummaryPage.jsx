import EquityCard from "../SummaryPage/EquityCard";
import HoldingsOverview from "../SummaryPage/HoldingsOverview";
import PerformanceCard from "../SummaryPage/PerformanceCard";
import RecentActivity from "../SummaryPage/RecentActivity";
import SummaryHeader from "../SummaryPage/SummaryHeader";
import "../../../styles/SummaryPage.css";
    
    
    
    
    function SummaryPage() {
    return (
        <div className="summary-page">
        <SummaryHeader />

        <div className="summary-grid">
            <EquityCard />
            <HoldingsOverview />
            <PerformanceCard />
            <RecentActivity />
        </div>
        </div>
    );
    }
export default SummaryPage;