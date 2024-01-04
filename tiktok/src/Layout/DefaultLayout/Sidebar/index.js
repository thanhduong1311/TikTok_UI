import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cs = classNames.bind(styles)


function Sidebar() {
    return (<div className={cs('wrapper')}>
        <div className={cs('sidebar')}>

        </div>
    </div>);
}

export default Sidebar;