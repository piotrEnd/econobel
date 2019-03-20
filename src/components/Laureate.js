import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Winner = styled.div`
	padding-top: 5rem;
	font-family: 'Raleway', sans-serif;
	font-size: 2rem;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	font-family: 'Lora', serif;
	line-height: 1.8;
	a {
		text-decoration: none;
		color: rgb(206, 161, 82);
		transition: .75s;
		&:hover {
			color: black;
		}
	}

	@media (min-width: 650px) {
		font-size: 2.5rem;
	}

	@media (min-width: 975px) {
		font-size: 3.5rem;
	}
`;

const Motivation = styled.blockquote`
	display: flex;
	flex-grow: 1;
	width: 70%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;

	font-size: 1.5rem;
	font-style: italic;
	letter-spacing: 2px;

	@media (min-width: 650px) {
		width: 55%;
		font-size: 1.8rem;
	}

	@media (min-width: 975px) {
		width: 30%;
		font-size: 2.2rem;
	}
`;

const Year = styled.div`
	padding-bottom: .15rem;

	font-size: .8rem;
	text-align: center;
	color: rgb(206, 161, 82);

	@media (min-width: 650px) {
		font-size: 1rem;
		padding-bottom: .25rem;
	}

	@media (min-width: 975px) {
		font-size: 1.2rem;
		padding-bottom: .45rem;
	}
`;

const Laureate = (props) => {
	const motivation = props.data.laureates[0].motivation;

	const winners = props.data.laureates.map((winner) => (
		<div key={winner.id}>
			<a
				href={`https://www.nobelprize.org/prizes/economic-sciences/${props.data
					.year}/${winner.surname}/facts`}
				target="_blank"
			>
				{winner.surname.toUpperCase()}, {winner.firstname} &#xab;
			</a>
		</div>
	));
	return (
		<Container id={'Y' + props.data.year}>
			<Winner>{winners}</Winner>
			<Motivation>{motivation.slice(1, motivation.length - 1)}</Motivation>
			<Year>{props.data.year}</Year>
		</Container>
	);
};

export default Laureate;
