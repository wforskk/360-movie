import React, { ReactNode } from 'react'
import css from './Top.module.scss'


type Props = {
    children?: ReactNode
}

const Top = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <div className={css.txtWrapper}>
            <div className={css.serviceTxt}>
                <span className={css.serviceWord}> 360°のインパクトを動画へ</span><br />
                <span className={css.serviceName}>360NOKID</span>
            </div>
        </div>
    </div>
)

export default Top
