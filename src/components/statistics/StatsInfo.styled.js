import styled from "styled-components";

export const StatsInfoItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-right: ${p => p.theme.borders.normal};
	&:last-child {
		border-right: ${p => p.theme.borders.none};
	}
	flex-basis: calc((100% - 4 * ${p => p.theme.space[0]}px) / 4);
`;

export const StatsInfoLabel = styled.span`
	font-size: ${p => p.theme.fontSizes.xs};
`;
export const StatsInfoPercent = styled.span`
	font-size: ${p => p.theme.fontSizes.m};
	font-weight: ${p => p.theme.fontWeights.bold};
`;
