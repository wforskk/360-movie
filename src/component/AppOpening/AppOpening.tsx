import React, { ReactNode } from 'react'
import css from './AppOpening.module.scss'
import Button from '../Util/Button/Button'
import { useRouter } from 'next/router'
import Image from 'next/image'


type Props = {
    children?: ReactNode
}

const AppOpening = (props: Props) => {

    // 画面遷移用宣言
    const router = useRouter()
    // 第一階層押下処理
    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        router.push('/')
    }

    return (
        <div className={css.opening}>
            <div className={css.imageWrapper}>
                <div className={css.image}>
                    <Image
                        src="/NOKID_logo_large.png"
                        alt="opening nokid logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default AppOpening
