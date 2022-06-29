import styled from "styled-components";

export const DescriptionUsername = styled.p`
	margin-top: ${p => p.theme.space[4]}px;
	font-size: ${p => p.theme.fontSizes.m};
	font-weight: ${p => p.theme.fontWeights.bold};
`;

export const DescriptionText = styled.p`
	margin-top: ${p => p.theme.space[3]}px;
	font-size: ${p => p.theme.fontSizes.s};
`;
