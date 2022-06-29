import { Box } from "components/box/Box";
import PropTypes from "prop-types";
import { StatsInfo } from "./StatsInfo";
import { Title, StatsInfoList } from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
	return (
		<Box borderX="normal" as="section" width="250px" m="0 auto">
			<Title>{title}</Title>
			<StatsInfoList>
				{stats.map(info => (
					<StatsInfo key={info.id} stats={info} />
				))}
			</StatsInfoList>
		</Box>
	);
};

Statistics.propTypes = {
	title: PropTypes.string.isRequired,
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
			id: PropTypes.string.isRequired,
		}),
	),
};
