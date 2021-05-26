import React, { ReactNode } from 'react'
import css from './AppBar.module.scss'
import Button from '../Util/Button/Button'
import { useRouter } from 'next/router'


type Props = {
    dispBtn: boolean,
    children?: ReactNode
}

const AppBar = (props: Props) => {

    // 画面遷移用宣言
    const router = useRouter()
    // 第一階層押下処理
    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        router.push('/')
    }

    return (
        <div className={css.appBar}>
            <div className={css.logoBtn}
                onClick={onClick}
            ></div>
            {props.dispBtn && (
                <Button >無料作成</Button>
            )}
        </div>
    )
}

export default AppBar
