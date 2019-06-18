import React  from 'react';
import './App.css';
import ContentEditiorPage  from './container/ContentEditiorPage';

export default function( ) {
	return (
			<div className="App">
				<div className="App-header">
					<img className="left-logo" src='https://assets.flightright.net/public/assets/images/commons/logos/flightright/flightright-logo--claim--en.svg' alt="logo"/>
				</div>
				<h1 > FrightRight Content Editor</h1>
				<div className="App-body">
					<ContentEditiorPage />
				</div>
			</div>
	);
}
