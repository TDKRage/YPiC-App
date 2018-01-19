/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';

import styles from './index.css';

const Layout = ({ children }) => (
	<div>
		<AppBar title="Young People in Christ" theme={styles} />
		{children}
	</div>
);

export default Layout;
