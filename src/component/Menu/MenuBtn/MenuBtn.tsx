import React from 'react'
import { useRouter } from 'next/router'
import css from './MenuBtn.module.scss'
import Button from '../../Util/Button/Button'

const MenuBtn = (): JSX.Element => {
    // 画面遷移用宣言
    const router = useRouter()

    // 画面遷移処理
    const handleAppbtnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const path = event.currentTarget.getAttribute('data-item')
        if (path == null) {
            return
        }
        router.push(path)
    }

    return (
        <div className={css.content}>
            <div className={css.btnWrapper}>
                <Button onClick={handleAppbtnClick} btnStyle='secondary' item='/serviceIntro'>サービス紹介</Button>
                <Button onClick={handleAppbtnClick} btnStyle='secondary' item='/serviceReq'>作成依頼</Button>
                <Button onClick={handleAppbtnClick} btnStyle='secondary' item='/areaTable'>空間一覧</Button>
                <Button onClick={handleAppbtnClick} btnStyle='secondary' item='/achievement'>実績/実例</Button>
                <Button onClick={handleAppbtnClick} btnStyle='secondary' item='/contact'>お問い合わせ</Button>
            </div>
        </div>
    )
}

export default MenuBtn
