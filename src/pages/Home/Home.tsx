import React, { FC, useContext, useEffect } from 'react'
import { PizzaBlock, Categories, Sort, Skeleton, Pagination } from 'components'
import { ReturnComponentType } from 'types'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory, selectSearchValue, selectSort } from 'redux/selectors/filter'
import { selectPage } from 'redux/selectors/filter'
import { setPage } from 'redux/slices/filterSlice'
import { getPizzas } from 'redux/slices/pizzasSlice'
import { selectLoadingStatus, selectPizzas } from 'redux/selectors/pizzas'

export type HomePropsType = {

}

const FOUR_FAKE_ITEMS = 4

export const Home: FC<HomePropsType> = (): ReturnComponentType => {

	const dispatch = useDispatch()

	const pizzas = useSelector(selectPizzas)
	const category = useSelector(selectCategory)
	const sort = useSelector(selectSort)
	const page = useSelector(selectPage)
	const loadingStatus = useSelector(selectLoadingStatus)
	const searchValue = useSelector(selectSearchValue)

	const fakeItems = [...new Array(FOUR_FAKE_ITEMS)]
	const renderFakeItems = fakeItems.map((_, index) => <Skeleton key={index} />)
	const renderPizzas = pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza} />)

	const handlePageChange = useCallback((page: number): void => {
		dispatch(setPage(page))
	}, [])

	const scrollPageUp = (): void => window.scrollTo(0, 0)

	useEffect(() => {
		//@ts-ignore
		dispatch(getPizzas({
			category,
			sortProperty: sort.sortProperty,
			order: sort.sortProperty,
			searchValue,
			page
		}))

		scrollPageUp()
	}, [category, sort.sortProperty, searchValue, page])

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories category={category} />
				<Sort sort={sort} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			{loadingStatus === 'error' ?
				<div className='content__error-info'>
					<h2>Произошла ошибка 😕</h2>
					<p>
						К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.
					</p>
				</div>
				: <div className='content__items'>
					{loadingStatus === 'loading' ? renderFakeItems : renderPizzas}
				</div>}
			<Pagination page={page} handlePageChange={handlePageChange} />
		</div >
	)
}
