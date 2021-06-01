import React, { ReactNode } from 'react'
import css from './Introduction.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import Youtube from '../../Util/YouTube/Youtube'


type Props = {
    children?: ReactNode
}

const Introduction = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='VRに特化した会社だからこその信頼！'></SubjectTitle>
        {/* <Grid></Grid> */}
        <Youtube embedId='DQcsiQ-MtkM' >
            Pizuya's Cell 360°MV「遷移ジェットストリーム」
        </Youtube>
        <Youtube embedId='Ff71Rc--QmY' >
            東方Vocal】匪石之アイデアル - Pizuya's Cell【360°MV】
        </Youtube>
        <Youtube embedId='znmFRFzRuFo' >
            PROJECT EMOTION - 世界最大のNFTアート展示会 【360°VR】
        </Youtube>
    </div>
)

export default Introduction
