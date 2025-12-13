    import React, { useState } from "react";
    import FundsSummary from "./FundsSummary";
    import FundsModal from "./FundsModel";
    import FundsHistory from "./FundsHistory";
    import "../../../styles/FundsPage.css";

    function FundsPage() {
    const [modalType, setModalType] = useState(null);

    return (
        <div className="funds-page">
        <h3 className="title">Funds</h3>
        <FundsSummary
            onAdd={() => setModalType("ADD")}
            onWithdraw={() => setModalType("WITHDRAW")}
        />
        {modalType && (
            <FundsModal
            type={modalType}
            onClose={() => setModalType(null)}
            />
        )}
        <FundsHistory />
        </div>
    );
    }

    export default FundsPage;
