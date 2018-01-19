/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';

const Layout = ({ children }) => (
	<div>
		<AppBar title="Young People in Christ" />
		{children}
	</div>
);

export default Layout;
