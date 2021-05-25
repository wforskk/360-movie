import React, { ReactNode } from 'react'
import css from './Content.module.scss'
import Top from './Top/Top'
import Contact from './Contact/Contact'
import Concept from './Concept/Concept'
import Price from './Price/Price'
import Introduction from './Introduction/Introduction'
import Point from './Point/Point'


type Props = {
    children?: ReactNode
}

const Content = ({ children }: Props) => (
    <div className={css.contentWrapper}>
        <div className={css.content}>
            <Top></Top>
        </div>
        <div className={css.content}>
            <Concept></Concept>
        </div>
        <div className={css.content}>
            <Point></Point>
        </div>
        <div className={css.content}>
            <Introduction></Introduction>
        </div>
        <div className={css.content}>
            <Price></Price>
        </div>
        <div className={css.content}>
            <Contact></Contact>
        </div>
    </div>
)

export default Content
