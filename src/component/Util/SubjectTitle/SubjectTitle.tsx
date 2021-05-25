import React, { ReactNode } from 'react'
import css from './SubjectTitle.module.scss'


type Props = {
    text: string
}

const SubjectTitle = ({ text }: Props) => (
    <>
        <div className={css.title}>
            {text}
        </div>
        <div className={css.underLine}>
        </div>
    </>
)

export default SubjectTitle
