import { Box } from "components/box/Box";
import PropTypes from "prop-types";
import { StatsList, StatsItem, StatsText, StatsValue } from "./Stats.styled";
import { formatViews } from "../../helpers/formatNumberfValue";

export const Stats = ({ followers, views, likes }) => {
	return (
		<Box bg="background">
			<StatsList>
				<StatsItem>
					<StatsText>Followers</StatsText>
					<StatsValue>{followers}</StatsValue>
				</StatsItem>
				<StatsItem>
					<StatsText>Views</StatsText>
					<StatsValue>{formatViews(views)}</StatsValue>
				</StatsItem>
				<StatsItem>
					<StatsText>Likes</StatsText>
					<StatsValue>{likes}</StatsValue>
				</StatsItem>
			</StatsList>
		</Box>
	);
};

Stats.propTypes = {
	followers: PropTypes.number.isRequired,
	views: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired,
};
