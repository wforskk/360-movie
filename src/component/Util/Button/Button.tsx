import React, { ReactNode } from 'react'
import css from './Button.module.scss'
import { useRouter } from 'next/router'


type Props = {
    children?: ReactNode
}

const Button = ({ children }: Props) => {

    // 画面遷移用宣言
    const router = useRouter()


    // 第一階層押下処理
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push('/cotact')
    }
    return (
        <>
            <button
                className={css.button}
                onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export default Button
