import React from 'react';
import styled from 'styled-components';

import Users from '../users';

const App = () => (
	<AppShell>
		<AppBar>
			<Title>Simple Paginate</Title>
		</AppBar>
		<Container>
			<Users />
		</Container>
	</AppShell>
);

// ========== Styles ===========

const AppShell = styled.div`
	font-size: 1rem;
	padding-top: 6.4rem;
	
`

const AppBar = styled.header`
		background-color: #FF9800;
		height: 6.4rem;
		width: 100%;
		padding: 0 1.6rem;
		position: fixed;
		top: 0;
		width: 100%;
		left: 0;
		right: 0;
		z-index: 10;
		box-shadow: 0 0 3px #939090;

`
const Title = styled.h1`
	font-size: 1.8rem;
	line-height: 6.4rem;
	font-weight: 700;
	color: white;
`

const Container = styled.div`
	width: 100%;
	max-width: 1160px;
	margin: 0 auto;
	padding: 8rem 1.6rem 1.6rem;
	min-height: calc(100vh - 8rem);
    display: flex;
    flex-flow: column;
    align-items: center;
`


export default App;
