import { Box } from "components/box/Box";
import { Status, FriendItem } from "./Friend.styled";

export const Friend = ({ friends: { avatar, name, isOnline } }) => {
	return (
		<FriendItem>
			<Status status={isOnline}></Status>
			<img src={avatar} alt="User avatar" width="48" />
			<Box ml={4}>
				<p>{name}</p>
			</Box>
		</FriendItem>
	);
};
