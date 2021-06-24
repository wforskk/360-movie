import React, { ReactNode } from 'react'
import css from './Button.module.scss'
import { useRouter } from 'next/router'


type Props = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined,
    btnStyle?: string,
    type?: 'button' | 'submit' | 'reset' | undefined,
    disabled?: boolean,
    item?: string,
    children?: ReactNode
}

const Button = ({ onClick, btnStyle = 'primary', type = 'button', disabled = false, item, children }: Props) => {
    const btnType = btnStyle === 'secondary' ? css.borderBtn : css.normalBtn
    return (
        <>
            <button
                type={type}
                className={btnType}
                disabled={disabled}
                data-item={item}
                onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export default Button
