import React, { ReactNode } from 'react'
import css from './Point.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import PickUpTxt from '../../Util/PickUpTxt/PickUpTxt'
import PointTable from './PointTable/PointTable'

const Point = () => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='NOKID360°の3つのポイント'></SubjectTitle>
        <div className={css.pointWrapper}>
            <span className={css.pointTxt}>
                <h2>・簡単にVR動画が作成可能</h2>
            </span>
            <PointTable></PointTable>
        </div>
        <div className={css.pointWrapper}>
            <span className={css.pointTxt}>
                <h2>・動画視聴率が向上</h2>
            </span>
            <div className={css.pointContent}>
                <h3>
                    youtube視聴者の80%以上が『youtube上にVR機能が搭載されている事を知らなかった』と返答しています。（当社調べ）
                <PickUpTxt>機能自体に大きなインパクト</PickUpTxt>があるので、実際に<PickUpTxt>動画開始5秒の視聴率は通常の動画と比べて8倍以上</PickUpTxt>に伸びています。
                </h3>
            </div>
        </div>
        <div className={css.pointWrapper}>
            <span className={css.pointTxt}>
                <h2>・再生数が向上</h2>
            </span>
            <div className={css.pointContent}>
                <h3>
                    facebook社が販売している<PickUpTxt>VRハードOculusquest2</PickUpTxt>が<PickUpTxt>全世界での売上100万台</PickUpTxt>を突破しました。
                VRハードでyoutubeを開くと<PickUpTxt>360°動画しか表示</PickUpTxt>されないので優先的に上位に表示されます。
                </h3>
            </div>
        </div>
    </div>
)

export default Point
