import React, { ReactNode } from 'react'
import css from './Layout.module.scss'
import Head from 'next/head'
import AppBar from '../AppBar/AppBar'


type Props = {
    dispBtn: boolean,
    children?: ReactNode
}

const Layout = (props: Props) => (
    <div className={css.appWrapper}>
        <AppBar dispBtn={props.dispBtn}></AppBar>
        <div className={css.main}>
            {props.children}
        </div>
        {/* <footer className={css.footer}>
            footer
        </footer> */}
    </div>
)

export default Layout
