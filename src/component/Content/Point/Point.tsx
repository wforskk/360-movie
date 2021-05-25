import React, { ReactNode } from 'react'
import css from './Point.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import PickUpTxt from '../../Util/PickUpTxt/PickUpTxt'


type Props = {
    children?: ReactNode
}

const Point = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='NOKID360°の3つのポイント'></SubjectTitle>
        <div className={css.pointWrapper}>
            <span className={css.pointNum}>01</span>
            <span className={css.pointTxt}>簡単にVR動画が作成可能</span><br />
            <table className={css.pointContent}>
                <tbody>
                    <tr>
                        <td className={css.pickUpTxt}>STEP 1.</td>
                        <td>360°空間を選択</td>
                    </tr>
                    <tr>
                        <td className={css.pickUpTxt}>STEP 2.</td>
                        <td>動画のURL（ギガファイル便、Googleドライブなど）を設定</td>
                    </tr>
                    <tr>
                        <td className={css.pickUpTxt}>STEP 3.</td>
                        <td>上記2点を「お問い合わせ」にて送信</td>
                    </tr>
                </tbody>
            </table>
            <div className={css.btnWrapper}>
                <button className={css.btn}>「お問い合わせ」で無料作成</button>
            </div>
        </div>
        <div className={css.pointWrapper}>
            <span className={css.pointNum}>02</span>
            <span className={css.pointTxt}>動画視聴率が向上</span><br />
            <div className={css.pointContent}>
                youtube視聴者の80%以上が『youtube上にVR機能が搭載されている事を知らなかった』と返答しています。（当社調べ）
                <PickUpTxt>機能自体に大きなインパクト</PickUpTxt>があるので、実際に<PickUpTxt>動画開始5秒の視聴率は通常の動画と比べて8倍以上</PickUpTxt>に伸びています。</div>
        </div>
        <div className={css.pointWrapper}>
            <span className={css.pointNum}>03</span>
            <span className={css.pointTxt}>再生数が向上</span><br />
            <div className={css.pointContent}>
                facebook社が販売している<PickUpTxt>VRハードOculusquest2</PickUpTxt>が<PickUpTxt>全世界での売上100万台</PickUpTxt>を突破しました。
                VRハードでyoutubeを開くと<PickUpTxt>360°動画しか表示</PickUpTxt>されないので優先的に上位に表示されます。
            </div>
        </div>
    </div>
)

export default Point
