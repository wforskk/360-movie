import React, { ReactNode } from 'react'
import css from './AreaItem.module.scss'

// コンポーネントの引数
type Props = {
    // title: string,
    // imageURL: string,
    children?: ReactNode
}

// メニューコンポーネント作成処理
export default function AreaItem(props: Props): JSX.Element {


    return (
        <>
            <div className={css.tempItem}>
            </div>
            <div className={css.itemNumber}>{props.children}</div>
            <div className={css.tempItem2}>
            </div>
            <div className={css.itemNumber2}>2</div>
        </>)
}