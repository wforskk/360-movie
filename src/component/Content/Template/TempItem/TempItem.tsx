import React, { ReactNode } from 'react'
import css from './TempItem.module.scss'

// コンポーネントの引数
type Props = {
    // title: string,
    // imageURL: string,
    children?: ReactNode
}

// メニューコンポーネント作成処理
export default function TempItem(props: Props): JSX.Element {


    return (
        <>
            <div className={css.tempItem}>
            </div>
            <div className={css.itemNumber}>{props.children}</div>
        </>)
}