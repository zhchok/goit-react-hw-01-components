import styled from "styled-components";

export const Title = styled.h2`
	font-family: ${p => p.theme.fonts.monospace};
	font-size: ${p => p.theme.fontSizes.l};
	font-weight: ${p => p.theme.fontWeights.bold};
	text-align: center;
	border-bottom: ${p => p.theme.borders.normal};
	padding: ${p => p.theme.space[2]}px;
`;

export const StatsInfoList = styled.ul`
	display: flex;
	justify-content: center;
	border-bottom: ${p => p.theme.borders.normal};
`;
