import React, { ReactNode } from 'react'
import css from './ServiceIntro.module.scss'
import Concept from './Concept/Concept'
import Price from './Price/Price'
import Point from './Point/Point'
import MainIntro from './MainIntro/MainIntro'


type Props = {
    children?: ReactNode
}

const ServiceIntro = ({ children }: Props) => (
    <div className={css.contentWrapper}>
        <div className={css.content}>
            <MainIntro></MainIntro>
        </div>
        {/* <div className={css.content}>
            <Concept></Concept>
        </div> */}
        <div className={css.content}>
            <Point></Point>
        </div>
        {/* <div className={css.content}>
            <Price></Price>
        </div> */}
    </div>
)

export default ServiceIntro
