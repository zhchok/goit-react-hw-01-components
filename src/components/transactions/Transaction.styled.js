import styled from "styled-components";

export const Td = styled.td`
	text-transform: capitalize;
	padding: ${p => p.theme.space[3]}px;
	text-align: center;
`;

export const Tr = styled.tr`
	:nth-child(even) {
		background-color: ${p => p.theme.colors.tableBg};
	}
`;
