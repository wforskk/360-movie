import React, { ReactNode } from 'react'
import css from './Price.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import PickUpTxt from '../../Util/PickUpTxt/PickUpTxt'
import HandsUpTxt from '../../Util/HandsUpTxt/HandsUpTxt'
import Plan from './Plan/Plan'


type Props = {
    children?: ReactNode
}

const Price = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='料金'></SubjectTitle>
        <Plan planName='無料プラン' price='0'>月に1本まで作成できます。またNOKIDのロゴが入ります。</Plan>
        <Plan planName='ノーマルプラン' price='9800'>月に3本まで作成できます。</Plan>
        <Plan planName='プレミアムプラン' price='19800'>月に10本まで作成できます。自社のロゴやオーダーメイドのロゴを作成することができます。</Plan>

        <HandsUpTxt>※現在は無料プランのみ</HandsUpTxt>
    </div>
)

export default Price
