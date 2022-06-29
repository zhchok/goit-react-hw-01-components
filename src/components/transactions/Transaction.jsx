import { Td, Tr } from "./Transaction.styled";

export const Transaction = ({ items: { type, amount, currency } }) => {
	return (
		<Tr>
			<Td>{type}</Td>
			<Td>{amount}</Td>
			<Td>{currency}</Td>
		</Tr>
	);
};
