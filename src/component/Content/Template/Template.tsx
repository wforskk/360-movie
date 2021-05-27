import React, { ReactNode } from 'react'
import css from './Template.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import TempItem from './TempItem/TempItem'
import HandsUpTxt from '../../Util/HandsUpTxt/HandsUpTxt'
import PickUpTxt from '../../Util/PickUpTxt/PickUpTxt'


type Props = {
    children?: ReactNode
}

const Template = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='360°空間'></SubjectTitle>
        <TempItem>1</TempItem>
        <PickUpTxt>※順次ご利用可能な360°空間は追加されます。（週に2~3個追加予定）</PickUpTxt>
    </div>
)

export default Template
