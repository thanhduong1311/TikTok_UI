import classNames from "classnames/bind";
import styles from './Video.module.scss'
import PropTypes from 'prop-types'
import Image from '../Image'
import Button from '../Buttons/Button'

const cs = classNames.bind(styles);

function HeaderVideo() {
    return ( <div className={cs('header')}>
        <div className={cs('avatar')}>
            <Image src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/60a055bbbb556d226fe802b4779bfae2~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705456800&x-signature=eKJ7te9GEn2oLmKzkJDGHCTgEV8%3D' 
            className={cs('img')}/>
        </div>

        <div className={cs('info')}>
                <a className="userInfo" href="">
                    <span className={cs('nickname')}>_Vector_</span>
                    <span className={cs('name')}>Vector</span>
                </a>

                <div className={cs('videoTitle')}>
                      Hologram ring
                </div>

                <div className={cs('song')}>

                </div>
        </div>

        <div className={cs('followButton')}>
                <Button outline>
                    Follow
                </Button>
        </div>
    </div> );
}

HeaderVideo.propTypes = {

}

export default HeaderVideo;