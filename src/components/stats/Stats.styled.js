import styled from "styled-components";

export const StatsList = styled.ul`
	display: flex;
	justify-content: center;
`;

export const StatsItem = styled.li`
	padding: ${p => p.theme.space[3]}px;
	margin-right: ${p => p.theme.space[3]}px;
	:last-child {
		margin-right: ${p => p.theme.space[0]}px;
	}
	align-items: center;
	background-color: ${p => p.theme.colors.background};
`;

export const StatsText = styled.span`
	display: block;
	text-align: center;
	font-size: ${p => p.theme.fontSizes.s};
`;
export const StatsValue = styled.span`
	display: block;
	text-align: center;
	font-weight: ${p => p.theme.fontWeights.bold};
	font-size: ${p => p.theme.fontSizes.m};
`;
