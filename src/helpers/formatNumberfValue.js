import numeral from "numeral";
export const formatViews = value => {
	return numeral(value).format("0,0");
};
