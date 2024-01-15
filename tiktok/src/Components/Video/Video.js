import classNames from "classnames/bind";
import styles from './Video.module.scss'
import PropTypes from 'prop-types'
import HeaderVideo from "./HeaderVideo";
import BodyVideo from "./BodyVideo";
import ReactButton from "./ReactButtons";

const cs = classNames.bind(styles);

function Video() {
    return (<div className={cs('wrapper')}>
            <HeaderVideo data={null}/>

            <BodyVideo/>

            <ReactButton/>
    </div> );
}

Video.propTypes = {

}

export default Video;