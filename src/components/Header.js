import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
	return (
		<header>
			<h1>Header</h1>
			<NavLink to="/" activeClassName="is-active" exact={true}>
				Dashboard
			</NavLink>
			<NavLink to="/create" activeClassName="is-active">
				Create Expense
			</NavLink>
			<NavLink to="/edit" activeClassName="is-active">
				Edit Expense
			</NavLink>
			<NavLink to="/help" activeClassName="is-active">
				Help
			</NavLink>
		</header>
	);
}
