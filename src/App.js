import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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
		<Link to="/">Dashboard</Link>
		<Link to="/create">Create Expense</Link>
		<Link to="/edit">Edit Expense</Link>
		<Link to="/help">Help</Link>
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
