import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import HeaderBox from "@/components/ui/headerBox";
import React from "react";

const Home = () => {
  const isLoggedIn = {
    firstName: "Mathesh",
    lastName: "M",
    email: "Matheshraju@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome!"
            subtext="Access and manage your Account and transactions efficiently "
            user={isLoggedIn?.firstName || "Guest"}
          />
        </header>
        <TotalBalanceBox
          accounts={[]}
          totalCurrentBalance={1250.77}
          totalBanks={1}
        />
        Recent Transcations
      </div>
      <RightSideBar
        user={isLoggedIn}
        banks={[{ currentBalance: 1250 }, { currentBalance: 1250 }]}
      />
    </section>
  );
};

export default Home;
