import React, { ReactNode } from 'react'
import css from './AppBar.module.scss'
import Button from '../Util/Button/Button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Menu from '../Menu/Menu'
const AppBar = () => {

    // 画面遷移用宣言
    const router = useRouter()
    // 画面遷移処理
    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        router.push('/')
    }

    // 画面遷移処理
    const onAppBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const path = event.currentTarget.getAttribute('data-item')
        if (path == null) {
            return
        }
        router.push(path)
    }

    return (
        <div className={css.appBar}>
            <div className={css.btnWrapper}>
                <div
                    className={css.logoBtn}
                    onClick={onClick}
                >
                    <Image
                        src="/NOKID_logo.png"
                        alt="nokid logo button"
                        width={220}
                        height={50}
                    />
                </div>
                <div className={css.pcMode}>
                    <Button onClick={onAppBtnClick} btnStyle='secondary' item='/serviceIntro'>サービス紹介</Button>
                    <Button onClick={onAppBtnClick} btnStyle='secondary' item='/serviceReq'>作成依頼</Button>
                    <Button onClick={onAppBtnClick} btnStyle='secondary' item='/areaTable'>空間一覧</Button>
                    <Button onClick={onAppBtnClick} btnStyle='secondary' item='/achievement'>実績/実例</Button>
                </div>
            </div>
            <Menu></Menu>
        </div>
    )
}

export default AppBar
