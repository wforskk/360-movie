import React, { ReactNode } from 'react'
import css from './Concept.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import PickUpTxt from '../../Util/PickUpTxt/PickUpTxt'

const Concept = () => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='Concept'></SubjectTitle>
        <h1><PickUpTxt>『VRでyoutubeの視聴維持率を上げませんか！？』</PickUpTxt></h1>
        <h3>
            VR動画は制作に時間とお金がかかるイメージありませんか？<br />
            確かに<PickUpTxt>VR動画を一から制作した場合、かなりコストがかかってしまいます。</PickUpTxt><br />
            しかし弊社ではバーチャル空間を事前準備することで<br />
            <PickUpTxt>VR動画を低価格かつ最短即日納品</PickUpTxt>することができます。<br /><br />
            また5Gの導入、<PickUpTxt>コロナ禍で動画の需要が一層高まっており、</PickUpTxt><br />
            VR動画はVRゴーグルを初め、スマートフォンでも気軽に視聴できます。<br /><br />
        </h3>
        <h2>NOKID360°はマス層に合わせたスマートフォンのVR制作サービスです。</h2>
    </div>
)

export default Concept
