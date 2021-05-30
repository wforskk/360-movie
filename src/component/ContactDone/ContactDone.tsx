import React, { ReactNode } from 'react'
import css from './ContactDone.module.scss'
import SubjectTitle from '../Util/SubjectTitle/SubjectTitle'

const ContactDone = () => (
    <div className={css.contentWrapper}>
        <div className={css.content}>
            <div className={css.itemWrapper}>
                <SubjectTitle text='お問い合わせ完了'></SubjectTitle>
            </div>
        </div>
    </div>
)

export default ContactDone
