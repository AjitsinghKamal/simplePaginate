import React, { Component } from 'react';
import UserList from '../userList';
import Navigator from '../pagenavigator';
import styled from 'styled-components';

const API = 'https://reqres.in/api/users'

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			totalPages: null,
			currentUsers: [],
			currentPage: 0,
		}

		this.getUsersData = this.getUsersData.bind(this);
		this.setPageData = this.setPageData.bind(this);
	}

	componentDidMount() {
		this.getUsersData(1) // get data for first page on initial load
	}

	// ======== methods ==========
	getUsersData(page) {
		if (this.state.totalPages && (page < 0 || page > this.state.totalPages)) {
			return;
		}
		this.setState({
			loading: true
		})
		fetch(`${API}?page=${page}`)
			.then((response) => response.json())
			.then((pageData) => this.setPageData(pageData))
	}

	setPageData(pageData) {
		const currentUsers = pageData.data;
		let disable = 0;
		if (pageData.page === 1) {
			disable = -1;
		}
		if (pageData.page === pageData.total_pages) {
			disable = 1
		}
		this.setState({
			totalPages: pageData.total_pages,
			currentPage: pageData.page,
			page: pageData.page,
			currentUsers,
			disable,
			loading: false
		})
	}

	render() {
		return (
			<Main>
				{this.state.loading? <Loader/> : null}
				<div>
					<PageTitle>Users</PageTitle>
					<UserList list={this.state.currentUsers} loading={this.state.loading}/>
				</div>
				<Navigator totalPage={this.state.totalPages} current={this.state.page} getPage={this.getUsersData} disable={this.state.disable} />
			</Main>
		);
	}
}

const Main = styled.main`
	display: flex;
	flex-flow: column;
	align-items: stretch;
	width: 60rem;
    max-width: 90%;
	margin: 0 auto;
	flex: 1;
	justify-content: space-between;
`
const PageTitle = styled.h2`
	font-size: 3.4rem;
	margin-bottom: 2.4rem;
`
const Loader = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
    z-index: 3;
    left: 0;
    background: rgba(255,255,255,0.7);

`
export default Users;
