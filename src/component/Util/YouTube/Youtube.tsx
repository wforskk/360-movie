import React, { ReactNode } from 'react'
import css from './Youtube.module.scss'

// コンポーネントの引数
type Props = {
    embedId: string,
    children?: ReactNode
}


// メニューコンポーネント作成処理
export default function Youtube(props: Props): JSX.Element {

    return (
        <>
            <div className={css.youtubeWrapper}>
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${props.embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>

            <div className={css.youtubeTxt}>{props.children}</div>
        </>)
}