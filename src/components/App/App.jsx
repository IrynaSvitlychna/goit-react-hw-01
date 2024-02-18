import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

// import clsx from "clsx";
// import css from "./App.module.css"



 function App() {
 
  return (
    <>
        <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
      );
}

export default App;
