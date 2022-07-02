import { Box } from "components/box/Box";
import PropTypes from "prop-types";
import { Description } from "components/profile/description/Description";
import { Stats } from "./stats/Stats";

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
			<Description username={username} avatar={avatar} tag={tag} location={location} />
			<Stats followers={followers} views={views} likes={likes} />
		</Box>
	);
};

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	followers: PropTypes.number.isRequired,
	views: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired,
};
