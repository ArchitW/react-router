import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => <div> ExpenseDashboardPage </div>;
const AddExpensePage = () => <div>AddExpensePage</div>;
const EditExpensePage = () => <div>EditExpense</div>;
const HelpPage = () => <div>Help</div>;
const PageNotFound = () => (
	<div style={{ textAlign: 'center' }}>
		<h1>
			404, LoL <Link to="/"> Go Home</Link>
		</h1>
	</div>
);
const Header = () => (
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
function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={ExpenseDashboardPage} exact={true} />
					<Route path="/create" component={AddExpensePage} />
					<Route path="/edit" component={EditExpensePage} />
					<Route path="/help" component={HelpPage} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
