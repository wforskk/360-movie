import React, { ReactNode } from 'react'
import css from './Top.module.scss'


type Props = {
    children?: ReactNode
}

const Top = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <div className={css.txtWrapper}>
            <div className={css.message}>
                360°のインパクトを動画へ！
            </div>
            <div className={css.compLogo}>
                NOKID360°
            </div>
        </div>
    </div>
)

export default Top
