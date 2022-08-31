import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { ReactSVG } from 'react-svg'
import getActionConfig from '@/util/node/getActionConfig'
import actionsConfig from '@/actions/actions.config.json'
import classNames from 'classnames'
const { compositeActions, sysActions } = actionsConfig

const cx = classNames.bind(styles)

const ActionBar: React.FC = () => {
	const [compositeBar, setcompositeBar] = useState<Array<Action>>([])
	const [sysActionsBar, setsysActionsBar] = useState<Array<Action>>([])
	const [activeId, setactiveId] = useState<number>(0)

	useEffect(() => {
		getActionConfig(compositeActions).then(ret => setcompositeBar(ret))
		getActionConfig(sysActions).then(ret => setsysActionsBar(ret))
	}, [])

	return (
		<div className={styles['actions-bar']}>
			<div className='composite-bar'>
				<ul className='actions-container'>
					{compositeBar.map(action => (
						<li
							className={cx('action-item', {
								'action-item-active': activeId === action.id,
							})}
							key={action.id}
							onClick={() => setactiveId(action.id)}
						>
							<ReactSVG src={action.icon} className='action-icon-svg' />
						</li>
					))}
				</ul>
			</div>
			<div className='sys-bar'>
				<ul className='actions-container'>
					{sysActionsBar.map(action => (
						<li className={cx('action-item')} key={action.id}>
							<ReactSVG src={action.icon} className='action-icon-svg' />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ActionBar
