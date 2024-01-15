import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import PropTypes from 'prop-types'

const cs = classNames.bind(styles)

function MenuItem({content, href}) {
    return ( <a href={href} className={cs('item')}>
        {content}
    </a>);
}

MenuItem.propTypes = {
    content : PropTypes.string.isRequired,
    href : PropTypes.string.isRequired
}

export default MenuItem;