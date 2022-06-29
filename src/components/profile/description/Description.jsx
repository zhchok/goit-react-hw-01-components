import { Box } from "components/box/Box";
import PropTypes from "prop-types";
import { DescriptionText, DescriptionUsername } from "./Description.styled";

export const Description = ({ avatar, username, tag, location }) => {
	return (
		<Box display="flex" flexDirection="column" alignItems="center" mt={5}>
			<img src={avatar} alt="User avatar" width="48" />
			<DescriptionUsername>{username}</DescriptionUsername>
			<DescriptionText>@{tag}</DescriptionText>
			<DescriptionText>{location}</DescriptionText>
		</Box>
	);
};

Description.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};
