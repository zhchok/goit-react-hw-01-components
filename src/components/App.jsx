import { GlobalStyle } from "./base/GlobalStyle";
import { Box } from "./box/Box";
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import { Transactions } from "./transactions/Transactions";
export const App = () => {
	return (
		<Box>
			<GlobalStyle />
			<Profile
				key={user.username}
				username={user.username}
				avatar={user.avatar}
				tag={user.tag}
				location={user.location}
				followers={user.stats.followers}
				views={user.stats.views}
				likes={user.stats.likes}
			></Profile>
			<Statistics title="Upload stats" stats={data}></Statistics>
			<FriendList friends={friends}></FriendList>
			<Transactions items={transactions}></Transactions>
		</Box>
	);
};
