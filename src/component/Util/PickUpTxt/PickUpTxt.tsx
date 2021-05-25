import React, { ReactNode } from 'react'
import css from './PickUpTxt.module.scss'


type Props = {
    children?: ReactNode
}

const PickUpTxt = ({ children }: Props) => (
    <>
        <span className={css.pickUpTxt}>
            {children}
        </span>
    </>
)

export default PickUpTxt
