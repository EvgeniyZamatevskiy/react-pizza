import { EMPTY_STRING } from 'constants/base'
import { useAppDispatch } from 'store/hooks'
import debounce from 'lodash.debounce'
import React, { ChangeEvent, FC, useCallback, useRef, useState } from 'react'
import { setSearchValue } from 'store/slices/filter'
import { ReturnComponentType } from 'types'
import style from './Search.module.scss'

export const Search: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const [value, setValue] = useState<string>(EMPTY_STRING)

	const inputRef = useRef<HTMLInputElement>(null)

	const updateSearchValue = useCallback(debounce((value: string): void => {
		dispatch(setSearchValue(value))
	}, 250), [])

	const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const currentValue = event.currentTarget.value

		setValue(currentValue)
		updateSearchValue(currentValue)
	}

	const showInputFocus = (): void => inputRef.current?.focus()

	const onResetSearchValueClick = (): void => {
		setValue(EMPTY_STRING)
		dispatch(setSearchValue(EMPTY_STRING))
		showInputFocus()
	}

	return (
		<div className={style.root}>
			<svg
				className={style.icon}
				enableBackground='new 0 0 32 32'
				id='EditableLine'
				version='1.1'
				viewBox='0 0 32 32'
				xmlns='http://www.w3.org/2000/svg'>
				<circle
					cx='14'
					cy='14'
					fill='none'
					id='XMLID_42_'
					r='9'
					stroke='#000000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
					strokeWidth='2'
				/>
				<line
					fill='none'
					id='XMLID_44_'
					stroke='#000000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
					strokeWidth='2'
					x1='27'
					x2='20.366'
					y1='27'
					y2='20.366'
				/>
			</svg>
			<input className={style.input} placeholder='Поиск пиццы...' value={value} onChange={onInputChange} ref={inputRef} />
			{value &&
				<svg
					className={style.clearIcon}
					onClick={onResetSearchValueClick}
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
				</svg>
			}
		</div>
	)
}
