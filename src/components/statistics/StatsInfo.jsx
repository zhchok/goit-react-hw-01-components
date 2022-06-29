import { StatsInfoItem, StatsInfoLabel, StatsInfoPercent } from "./StatsInfo.styled";

export const StatsInfo = ({ stats: { label, percentage } }) => {
	return (
		<StatsInfoItem>
			<StatsInfoLabel>{label}</StatsInfoLabel>
			<StatsInfoPercent>{percentage}%</StatsInfoPercent>
		</StatsInfoItem>
	);
};
