import {NavLink} from 'react-router-dom'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cs = classNames.bind(styles)

function MenuItem({to, title, icon, activeIcon}) {
    return (  <div>
        <NavLink className={(nav)=> cs('MenuItem', {active:nav.isActive })} to={to} >
            <span className={cs('icon')} >{icon}</span>
            <span className={cs('activeIcon')} >{activeIcon}</span>
            <span className={cs('title')}>{title}</span>
        </NavLink>
    </div>);
}

export default MenuItem ;