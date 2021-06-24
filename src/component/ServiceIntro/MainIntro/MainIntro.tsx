import React, { ReactNode } from 'react'
import css from './MainIntro.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import PickUpTxt from '../../Util/PickUpTxt/PickUpTxt'

const MainIntro = () => (
    <div className={css.content}>
        <SubjectTitle text='サービス紹介'></SubjectTitle>
        <div className={css.fristIntro}>
            <h2><PickUpTxt>360NOKIDとは</PickUpTxt></h2>
            <h3>NOKID360°は動画にインパクトを付与するVR制作サービス</h3>
            <h3>VR動画というトレンドに乗じたコンテンツを簡単に作れるサービス</h3>
            <h3>今なら無料で提供中</h3>
        </div>
        <div>
            <h2><PickUpTxt>今VR動画を使う理由</PickUpTxt></h2>
            <h3>コンテンツ制作で時代を先取りする</h3>
            <h3>まだまだ投稿コンテンツが少ないため、検索への露出確立が非常に高い</h3>
        </div>
        <div>
            <h2><PickUpTxt>360NOKIDを利用するメリット</PickUpTxt></h2>
            <h3>動画のファイルと連絡先と動画を提出するだけでVR動画が作れる</h3>
            <h3>サービスリリースキャンペーンで無料でサービスを提供中</h3>
            <h3>動画の視聴率の向上、再生回数の向上</h3>
        </div>
        <div>
            <h2><PickUpTxt>7月末までのキャンペーン</PickUpTxt></h2>
            <h3>無料で動画が1個作れる</h3>
            <h3>紹介キャンペーン（1人紹介するごとに1個無料で製作可能）</h3>
        </div>
    </div>
)

export default MainIntro
