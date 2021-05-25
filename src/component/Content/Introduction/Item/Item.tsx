import React, { ReactNode } from 'react'
import Image from 'next/image'
import css from './Item.module.scss'
import { useRouter, NextRouter } from 'next/router'
import PickUpTxt from '../../../Util/PickUpTxt/PickUpTxt'

// コンポーネントの引数
type Props = {
    title: string,
    // imageURL: string,
    children?: ReactNode
}

// 方が冗長的なので省略文字（型）を定義
type MouseEvent = React.MouseEvent<HTMLDivElement>

const pushRouter = (event: MouseEvent, router: NextRouter) => {
    router.push('/technologyInfo/angular/validatior')
}


// メニューコンポーネント作成処理
export default function Item(props: Props): JSX.Element {
    // 画面遷移用宣言
    const router = useRouter()


    const onClick = (event: MouseEvent) => {
        pushRouter(event, router)
    }


    return (
        <div className={css.item}>
            {/* <Image
          src={props.imageURL}
          alt={props.title}
          width={500}
          height={500}
        /> */}
            <div>画像</div>
            <div className={css.itemTitle}>
                <PickUpTxt>{props.title}</PickUpTxt>
            </div>
            <div className={css.itemContent}>{props.children}</div>
        </div>)
}