import styled from "styled-components";

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const Th = styled.th`
	padding: ${p => p.theme.space[3]}px;
	background-color: #04aa6d;
	color: ${p => p.theme.colors.white};
`;
