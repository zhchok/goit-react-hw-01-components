import styled from "styled-components";

export const FriendItem = styled.li`
	width: 200px;
	padding: ${p => p.theme.space[3]}px;
	margin-bottom: ${p => p.theme.space[2]}px;
	display: flex;
	align-items: center;
	justify-content: start;
	border: ${p => p.theme.borders.normal};
`;

export const Status = styled.span`
	display: block;
	width: 16px;
	height: 16px;
	margin-right: ${p => p.theme.space[4]}px;
	border: ${p => p.theme.borders.normal};
	border-radius: ${p => p.theme.radii.round};
	background-color: ${p => {
		switch (p.status) {
			case true:
				return p.theme.colors.statusOn;
			case false:
				return p.theme.colors.statusOff;
			default:
				return "#000";
		}
	}};
`;
