import React, { ReactNode } from 'react'
import css from './AppBar.module.scss'


type Props = {
    children?: ReactNode
}

const AppBar = ({ children }: Props) => (
    <div className={css.appBar}>
        <div className={css.logoBtn}></div>
        <button className={css.contactBtn}>無料作成</button>
    </div>
)

export default AppBar
