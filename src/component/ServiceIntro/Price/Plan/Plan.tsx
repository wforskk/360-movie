import React, { ReactNode } from 'react'
import css from './Plan.module.scss'


type Props = {
    planName: string,
    price: string,
    children?: ReactNode
}

const Plan = (props: Props) => (
    <div className={css.planWrapper}>
        <div className={css.planName}>プラン名： {props.planName}</div>
        <div className={css.underLine}></div>
        <div className={css.price}>月額　{props.price}円</div>
        <div className={css.content}>
            {props.children}
        </div>
    </div>
)

export default Plan
