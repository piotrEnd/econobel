import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
	padding-top: 2vh;
	font-size: 1.5rem;
	text-align: center;
	position: sticky;
	top: 0;

	@media (min-width: 650px) {
		padding-top: 4vh;
		font-size: 1.75rem;
	}

	@media (min-width: 975px) {
		padding-top: 6vh;
		font-size: 2rem;
	}
`;

const Heading = styled.div`
	span {
		color: rgb(206, 161, 82);
		letter-spacing: 1px;
	}
`;

const SelectYear = styled.select`
	cursor: pointer;

	width: 8rem;
	padding: 5px 8px;

	text-align: center;
	text-align-last: center;

	color: white;
	border: none;
	box-shadow: none;
	background: rgb(206, 161, 82);
	text-shadow: 0 0 0 rgb(206, 161, 82);
	-webkit-appearance: none;

	transition: .25s;

	&:hover {
		color: rgb(206, 161, 82);
		background: white;
		width: 50%;
	}

	@media (min-width: 650px) {
		width: 12rem;
	}

	@media (min-width: 975px) {
		width: 18rem;
	}
`;

const OptionYear = styled.option`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: center;
`;

const Header = (props) => {
	const years = props.year.map((year) => (
		<OptionYear key={year.year} value={year.year}>
			{year.year}
		</OptionYear>
	));

	return (
		<Top>
			<Heading>
				The <span>NOBEL PRIZE </span>in Economic Sciences
			</Heading>
			&#x21c1;{' '}
			<SelectYear onChange={props.change} value={props.value}>
				{years}
			</SelectYear>{' '}
			&#8637;
		</Top>
	);
};

export default Header;
