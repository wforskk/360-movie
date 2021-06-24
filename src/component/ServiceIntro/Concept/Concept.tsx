import React, { ReactNode } from 'react'
import css from './Concept.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import PickUpTxt from '../../Util/PickUpTxt/PickUpTxt'
import Youtube from '../../Util/YouTube/Youtube'

const Concept = () => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='コンセプト'></SubjectTitle>
        <h2>
            <PickUpTxt>『VRで映像の視聴維持率を上げませんか！？』</PickUpTxt>
        </h2>
        <Youtube embedId='Rya4bc9F8gU' >
            サービスサンプルVR動画
        </Youtube>
        <h3>
            VR動画は制作に時間とお金がかかるイメージありませんか？<br />
            確かに<PickUpTxt>VR動画を一から制作した場合、かなりコストがかかってしまいます。</PickUpTxt><br />
        </h3>
        <h3>
            しかし弊社では<PickUpTxt>VR動画を低価格かつ最短即日納品</PickUpTxt>することができます。<br /><br />
            また5Gの導入、<PickUpTxt>コロナ禍で動画の需要が一層高まっており、</PickUpTxt><br />
            VR動画はVRゴーグルを初め、スマートフォンでも気軽に視聴できます。<br /><br />
        </h3>
        <h2>NOKID360°は動画にインパクトを付与するVR制作サービスです。</h2>
    </div>
)

export default Concept
