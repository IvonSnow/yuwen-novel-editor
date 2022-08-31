import React from 'react'
import ActionBar from '@/components/ActionBar'
import SiderBar from '@/components/SideBar'
import MainContainer from '@/components/MainContianer'
import styles from './index.module.scss'

function App() {
	return (
		<div className={styles['app-container']}>
			<ActionBar />
			<SiderBar />
			<MainContainer />
		</div>
	)
}

export default App
