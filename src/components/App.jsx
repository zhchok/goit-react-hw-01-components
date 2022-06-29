import { GlobalStyle } from "./base/GlobalStyle";
import { Profile } from "./profile/Profile";
import { Box } from "./box/Box";
import user from "../user.json";

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
		</Box>
	);
};
