
import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from '../listItem';
import Card from '../detailcard';

class UserList extends Component{
	constructor(props) {
		super(props);
		this.createList = this.createList.bind(this);
	}
	createList() {
		return this.props.list.map( (data, index) => (
			<ListItem key={index} user={data}/>
		))
	}


	render() {
		const listItems = (this.props.list) ? this.createList() : null;
		return (

				<ListContainer>
					<ul>
						{listItems}
					</ul>
				</ListContainer>
		);
	}
}

// =========== Styles ==========

const ListContainer = styled.div`
	padding: 0.8rem 0
`


export default UserList;
