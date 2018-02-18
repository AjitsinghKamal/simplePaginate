import React, { Component } from 'react';
import styled, {css} from 'styled-components';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.showDetail = this.showDetail.bind(this);
		this.state = {
			detail: false
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {

		}
	}

	showDetail() {
		console.log('click');
		this.setState({
			detail: !this.state.detail
		})
	}
	render() {
		return (
			<Block showDetail={this.state.detail} onClick={this.showDetail}>
				<AvatarFrame showDetail={this.state.detail}>
					{this.props.placeholder ? null : <Avatar src={this.props.user.avatar} />}
				</AvatarFrame>
				<Aside showDetail={this.state.detail}>
					<Text placeholder={this.props.placeholder ? 1: 0}>
						{this.props.user.first_name}
						<LastName> {this.props.user.last_name}</LastName>
					</Text>
					<Text placeholder={this.props.placeholder ? 1 : 0}>User id: {`@${this.props.user.id}`}</Text>
				</Aside>
				<Detail showDetail={this.state.detail}>
					<DetailText>
						{this.props.user.first_name}
						<LastName> {this.props.user.last_name}</LastName>
					</DetailText>
					<DetailText>User id: {`@${this.props.user.id}`}</DetailText>
				</Detail>
			</Block>

		)
	}
}

// ========== Styles ============

const Block = styled.li`
	display: flex;
	flex-flow: row wrap;
	cursor: pointer;
	transition: all 0.6s;
	padding: 1rem 0;
	position: relative;
	margin-bottom: 2.6rem;
	transform: translateZ(0);
	padding-bottom: ${props => props.showDetail ? '15rem' : '1rem'};
`

const imageBase = css`
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
`
const AvatarFrame = styled.div`
	${imageBase}
	position:relative;
	flex: 0 0 6rem;
	transform-origin: left;
	background-color: #e6e6e6;
	transition: 0.6s;
	z-index: 2;
	transform: ${props => props.showDetail ? 'scale(2) translate(-50%)' : 'scale(1) '};
	left: ${props => props.showDetail ? '50%' : '0'};
`
const Avatar = styled.img`
	${imageBase}
	position:absolute;
`

const Aside = styled.div`
	border-bottom: 1px solid #d9d9d9;
	flex: 1;
	padding: 0rem 1.6rem 2rem;
	transition: opacity 0.4s;
	font-size: 1rem;
	z-index: 0;
	transform-origin: top;
	opacity: ${props => props.showDetail ? '0' : '1'}
`

const Text = styled.p`
	font-weight: 400;
	font-size: 1.6em;
	&:last-child {
		margin-top: 0.8rem;
		font-size: 1.4em;
	}
	transition: background 0.4s;
	background: ${props => props.placeholder ? '#e6e6e6' : 'none'};
	color: ${props => props.placeholder ? '#e6e6e6' : 'black'};
`
const LastName = styled.span`
	font-weight: 300;
`

const Detail = styled.div`
	position: absolute;
	top: 0;
	padding: 2rem;
	text-align:center;
	transform-origin: top;
	border-radius: 2px;
    box-shadow: 0 1px 3px #f3973e;
	transition: all 0.6s;
	width: 100%;
	transform: translateZ(0);
	background: ${props => props.showDetail ? '#FFD180' : 'transparent'};
	padding-top: ${props => props.showDetail ? '10rem' : '2rem'};
	opacity: ${props => props.showDetail ? '1' : '0'};
	z-index: ${props => props.showDetail ? '1' : '-1'};
`

const DetailText = Text.extend`
	font-size: 2.4rem;
`

export default ListItem;