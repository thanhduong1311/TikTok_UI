
import classNames from "classnames/bind";
import styles from './Video.module.scss'
import PropTypes from 'prop-types'

const cs = classNames.bind(styles);

function ReactButton() {
    return ( <div className={cs('react')}>
            react
    </div> );
}

ReactButton.propTypes = {
    
}

export default ReactButton;