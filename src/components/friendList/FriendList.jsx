import { Box } from "components/box/Box";
import { Friend } from "./Friend";
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
	return (
		<Box>
			<ul>
				{friends.map(friend => (
					<Friend key={friend.id} friends={friend} />
				))}
			</ul>
		</Box>
	);
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		}),
	),
};
