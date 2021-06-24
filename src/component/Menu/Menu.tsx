import React from 'react'
import css from './Menu.module.scss'
import MenuIcon from '@material-ui/icons/Menu';
import MenuBtn from './MenuBtn/MenuBtn';

const Menu = (): JSX.Element => {

    const [menuOpenFlag, setMenuOpenFlag] = React.useState(false)

    const handleCloseMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        // イベントの伝播阻止
        event.stopPropagation()
        setMenuOpenFlag(false)
    }

    const handleOpenMenu = () => {
        setMenuOpenFlag(true)
    }

    return (
        < div onClick={handleOpenMenu} className={css.iconWrapper}>
            <MenuIcon style={{ fontSize: 40 }} />
            {menuOpenFlag && (
                <div className={css.menu} onClick={handleCloseMenu}>
                    <MenuBtn />
                </div>
            )}
        </div >
    )
}

export default Menu
