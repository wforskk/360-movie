import React, { ReactNode } from 'react'
import css from './ButtonLarge.module.scss'
import { useRouter } from 'next/router'


type Props = {
    children?: ReactNode
}

const ButtonLarge = ({ children }: Props) => {

    // 画面遷移用宣言
    const router = useRouter()

    // 第一階層押下処理
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push('/contact')
    }
    return (
        <div className={css.btnWrapper}>
            <button
                className={css.button}
                onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default ButtonLarge
