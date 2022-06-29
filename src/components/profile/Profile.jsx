import { Box } from "components/box/Box";
import { Description } from "components/description/Description";
import { Stats } from "../stats/Stats";

export const Profile = ({ avatar, username, tag, location, followers, views, likes }) => {
	return (
		<Box
			width="250px"
			height="300px"
			border="normal"
			m="0 auto"
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
		>
			<Description username={username} avatar={avatar} tag={tag} location={location}></Description>
			<Stats followers={followers} views={views} likes={likes}></Stats>
		</Box>
	);
};
