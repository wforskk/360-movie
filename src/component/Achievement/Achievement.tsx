import React, { ReactNode } from 'react'
import css from './Achievement.module.scss'
import SubjectTitle from '../Util/SubjectTitle/SubjectTitle'
import Youtube from '../Util/YouTube/Youtube'


type Props = {
    children?: ReactNode
}

const Achievement = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='実績/実例'></SubjectTitle>
        <Youtube embedId='znmFRFzRuFo' >
            PROJECT EMOTION - 世界最大のNFTアート展示会 【360°VR】
        </Youtube>
        {/* <Grid></Grid> */}
        <Youtube embedId='DQcsiQ-MtkM' >
            Pizuya's Cell 360°MV「遷移ジェットストリーム」
        </Youtube>
        <Youtube embedId='Ff71Rc--QmY' >
            東方Vocal】匪石之アイデアル - Pizuya's Cell【360°MV】
        </Youtube>
    </div>
)

export default Achievement
