import React from 'react';
import Header from './Header';
import Main from './Main';
import FooterLinks from './FooterLinks';

const mainStyle = { 
	position: 'absolute',
	top: 50,
	left: 50,
	background: '#111',
	background: 'rgba(0,0,0,0.65)',
	width: 300,
	textAlign: 'left'
};

const App = () =>
    <div style={mainStyle}>
        <Header />
        <Main />
		<FooterLinks />
    </div>;

export default App;