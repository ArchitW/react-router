import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ExpenseDashboardPage = () => <div> ExpenseDashboardPage </div>;
const AddExpensePage = () => <div>AddExpensePage</div>;
const EditExpensePage = () => <div>EditExpense</div>;
const HelpPage = () => <div>Help</div>;
const PageNotFound = () => (
	<div style={{ textAlign: 'center' }}>
		<h1>404, LoL</h1>
	</div>
);
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	);
}

export default App;
