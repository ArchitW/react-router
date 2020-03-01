import React from 'react';
import { Link } from 'react-router-dom';
export default function PageNotFound() {
	return (
		<div>
			404, Page Not Found <br />
			click <Link to="/"> Here </Link> to go back
		</div>
	);
}
