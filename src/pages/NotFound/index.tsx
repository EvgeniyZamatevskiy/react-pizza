import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import styles from './NotFoundBlock.module.scss'

const NotFound: FC = (): ReturnComponentType => {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				Ничего не найдено
			</h1>
			<p className={styles.description}>
				К сожалению данная страница отсутствует в нашем интернет-магазине
			</p>
		</div>
	)
}

export default NotFound
