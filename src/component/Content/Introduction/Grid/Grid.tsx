import React, { ReactNode } from 'react'
import css from './Grid.module.scss'
import Item from '../Item/Item'

// コンポーネントの引数
type Props = {
    children?: ReactNode
}


// メニューコンポーネント作成処理
export default function Grid({ children }: Props): JSX.Element {

    return (
        <div className={css.grid}>
            <Item title='ミュージックビデオ実績'>360°動画動画のアニメーションMVの豊富な制作実績があります。</Item>
            <Item title='イベント実績' >youtube上でのオンラインイベントで1週間で40万回再生を記録しました。</Item>
            <Item title='潤沢なクリエイター陣' ></Item>
            <Item title='' ></Item>
            <Item title='' ></Item>
            <Item title='' ></Item>
            <Item title='' ></Item>
        </div>)
}