import PropTypes from "prop-types";
import { Transaction } from "./Transaction";
import { Table, Th } from "./Transactions.styled";

export const Transactions = ({ items }) => {
	return (
		<Table>
			<thead>
				<tr>
					<Th>Type</Th>
					<Th>Amount</Th>
					<Th>Currency</Th>
				</tr>
			</thead>
			<tbody>
				{items.map(item => (
					<Transaction key={item.id} items={item}></Transaction>
				))}
			</tbody>
		</Table>
	);
};

Transactions.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.exact({
			amount: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}),
	),
};
