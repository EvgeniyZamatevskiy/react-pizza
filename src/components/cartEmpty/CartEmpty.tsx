import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { Link } from 'react-router-dom'
import cartEmptyImg from 'assets/images/empty-cart.png'
import { Path } from 'enums'

export const CartEmpty: FC = (): ReturnComponentType => {
	return (
		<div className='cart cart--empty'>
			<h2>
				Корзина пустая <span>😕</span>
			</h2>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src={cartEmptyImg} alt='Empty cart' />
			<Link to={Path.HOME} className='button button--black'>
				<span>Вернуться назад</span>
			</Link>
		</div>
	)
}
