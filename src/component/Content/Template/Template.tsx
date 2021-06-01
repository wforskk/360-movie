import React, { ReactNode } from 'react'
import css from './Template.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import TempItem from './TempItem/TempItem'
import PickUpTxt from '../../Util/PickUpTxt/PickUpTxt'
import Link from 'next/link'


type Props = {
    children?: ReactNode
}

const Template = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='360°空間'></SubjectTitle>
        <div className={css.link}>
            <Link href='https://www.youtube.com/channel/UCKcmiuA3Qp0I5wqRd4pONnQ'>空間のサンプル動画一覧（Youtubeに遷移）</Link>
        </div>
        <TempItem>1</TempItem>
        {/* <TempItem>1</TempItem> */}
        <PickUpTxt>※順次ご利用可能な360°空間は追加されます。（週に2~3個追加予定）</PickUpTxt>
    </div>
)

export default Template
