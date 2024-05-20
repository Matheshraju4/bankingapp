import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import HeaderBox from "@/components/ui/headerBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const isLoggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome!"
            subtext="Access and manage your Account and transactions efficiently "
            user={isLoggedIn?.name || "Guest"}
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
