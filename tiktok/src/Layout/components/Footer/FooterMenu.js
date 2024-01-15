import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import PropTypes from 'prop-types'

const cs = classNames.bind(styles)

function FooterMenu({children}) {
    return ( <div className={cs('wrapper')}>
        {children}
    </div>);
}

FooterMenu.propTypes = {
    children : PropTypes.node.isRequired
}

export default FooterMenu;