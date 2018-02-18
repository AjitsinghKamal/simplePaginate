
import React, { Component } from 'react';
import styled from 'styled-components';

class Navigator extends Component {
	constructor(props) {
		super(props);
		this.pageLister = this.pageLister.bind(this);
	}

	pageLister() {
		const {totalPage, current} = this.props;

		return Array(totalPage).fill(null).map((v, index) => {
			return (
				<PageNumber 
					key={index} 
					active={(current === (index + 1))? true : false}
					onClick={this.navigateTo.bind(this, index+1)}>
				{index+1}
				</PageNumber>
			)
		})
	};

	navigateTo(current) {
		this.props.getPage(current);
	}

	render(){
		const listItems = (this.props.totalPage) ? this.pageLister() : null;
		return (
			<NavigationBlock>
				<PrevButton disable = {this.props.disable} onClick={this.navigateTo.bind(this,this.props.current - 1)}><Prev /></PrevButton>
			<Pages>
				{listItems}
					<PageDesc>
						<p>Page <span>{this.props.current}</span> of <span>{this.props.totalPage}</span></p> 
					</PageDesc>
			</Pages>
				<NextButton disable={this.props.disable} onClick={this.navigateTo.bind(this,this.props.current + 1)}><Next /></NextButton>
				</NavigationBlock>
		);
	}
}

// =========== Styles ==========

const NavigationBlock = styled.div`
	align-self: center;
    max-width: 60rem;
    display: flex;
    margin-top: 8rem;
    align-items: center;
    width: 100%;
	flex-flow: row wrap;
	justify-content: center;
`
const Pages = styled.ul`
	padding: 0.8rem 0;
	display: flex;
	align-items: center;
`

const PageNumber = styled.li`
	font-size: 1.4rem;
	padding: 0.6rem 1.2rem;
    margin: 0 0.6rem;
	cursor: pointer;
	transition: background 0.4s;
	background-color: ${props => props.active ? '#FFCC80' : null};
	&:hover,
	&:active {
		background-color: ${props => !props.active ? '#FFF3E0' : '#FFCC80'};
	}
	@media (max-width: 720px) {
		display: none;
	}
`

const PageDesc = PageNumber.extend`
	display: none;
	@media (max-width: 720px) {
		display: block
	}
`

const Button = styled.button`
	padding: 0.6rem 1.2rem;
	border-radius: 50%;
	position: relative;
	height: 4rem;
	box-shadow: 0 0 4px #939090;
	width: 4rem;
	transition: background 0.4s;
	&:hover,
	&:active {
		background-color: #FF9800;
	}

`
	
const PrevButton = Button.extend`
	margin-right: 2.6rem;
	background-color: ${props => (props.disable === -1) ? '#9E9E9E' : '#FFB74D'};
	cursor: ${props => (props.disable === -1) ? 'auto' : 'pointer'};
	pointer-events: ${props => (props.disable === -1) ? 'none' :'auto'}

`

const NextButton = Button.extend`
	margin-left: 2.6rem;
	background-color: ${props => (props.disable === 1) ? '#9E9E9E' : '#FFB74D'};
	cursor: ${props => (props.disable === 1) ? 'auto' : 'pointer'};
	pointer-events: ${props =>( props.disable === 1) ? 'none' :'auto'}

`

const Arrows = styled.div`
	height: 1.2rem;
	width: 1.2rem;
	position: absolute;
	box-shadow: 2px 2px white;
`

const Next = Arrows.extend`
    transform: translate(-25%,-50%) rotate(-45deg);
`
const Prev = Arrows.extend`
    transform: translate(50%,-50%) rotate(135deg);
`
export default Navigator;
