import classNames from "classnames/bind";
import styles from './Video.module.scss'
import PropTypes from 'prop-types'

const cs = classNames.bind(styles);

function BodyVideo() {
    return ( <div className={cs('body')}>
        body
    </div> );
}

BodyVideo.propTypes = {
    
}

export default BodyVideo;