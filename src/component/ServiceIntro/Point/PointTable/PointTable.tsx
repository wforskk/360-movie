import React, { ReactNode } from 'react'
import css from './PointTable.module.scss'
import PickUpTxt from '../../../Util/PickUpTxt/PickUpTxt'

const PointTable = () => (
    <table className={css.pointContent}>
        <tbody>
            <tr>
                <td className={css.pickUpTxt}>
                    <h3>
                        <PickUpTxt>STEP 1.</PickUpTxt>
                    </h3>
                </td>
                <td>
                    <h3>360°空間を選択</h3>
                </td>
            </tr>
            <tr>
                <td className={css.pickUpTxt}>
                    <h3>
                        <PickUpTxt>STEP 2.</PickUpTxt>
                    </h3>
                </td>
                <td>
                    <h3>動画のURL（ギガファイル便、Googleドライブなど）を設定</h3>
                </td>
            </tr>
            <tr>
                <td className={css.pickUpTxt}>
                    <h3>
                        <PickUpTxt>STEP 3.</PickUpTxt>
                    </h3>
                </td>
                <td>
                    <h3>上記2点を合わせ「作成依頼」にて送信</h3>
                </td>
            </tr>
        </tbody>
    </table>
)

export default PointTable
