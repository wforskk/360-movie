import React, { ReactNode } from 'react'
import css from './HandsUpTxt.module.scss'


type Props = {
    children?: ReactNode
}

const HandsUpTxt = ({ children }: Props) => (
    <>
        <div className={css.handsUpTxt}>
            {children}
        </div>
    </>
)

export default HandsUpTxt
