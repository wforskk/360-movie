import React, { ReactNode } from 'react'
import css from './AreaTable.module.scss'
import SubjectTitle from '../Util/SubjectTitle/SubjectTitle'
import PickUpTxt from '../Util/PickUpTxt/PickUpTxt'
import Link from 'next/link'
import AreaItem from './AreaItem/AreaItem'
import { selectAreaList } from '../../static/selectAreaList'
import Image from 'next/image'

const areaElList = (): JSX.Element[] => {
    let el: JSX.Element[] = []

    for (let item of selectAreaList) {
        if (item.id === '000') {
            continue
        }
        el.push(
            <div key={item.id} className={css.image}>
                <Image
                    src={item.url}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        )
    }

    return el
}

const AreaTable = () => (
    <div className={css.content}>
        <SubjectTitle text='360°空間テンプレート'></SubjectTitle>
        <div className={css.link}>
            <Link href='https://www.youtube.com/channel/UCKcmiuA3Qp0I5wqRd4pONnQ'>空間のサンプル動画一覧（Youtubeに遷移）</Link>
        </div>
        <div>
            {areaElList()}
        </div>
        {/* <AreaItem>1</AreaItem> */}
        {/* <TempItem>1</TempItem> */}
        {/* <PickUpTxt>※順次ご利用可能な360°空間は追加されます。（週に2~3個追加予定）</PickUpTxt> */}
    </div>
)

export default AreaTable
