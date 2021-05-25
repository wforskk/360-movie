import React, { ReactNode } from 'react'
import css from './Introduction.module.scss'
import SubjectTitle from '../../Util/SubjectTitle/SubjectTitle'
import Grid from './Grid/Grid'


type Props = {
    children?: ReactNode
}

const Introduction = ({ children }: Props) => (
    <div className={css.itemWrapper}>
        <SubjectTitle text='VRに特化した会社だからこその信頼！'></SubjectTitle>
        <Grid></Grid>
    </div>
)

export default Introduction
