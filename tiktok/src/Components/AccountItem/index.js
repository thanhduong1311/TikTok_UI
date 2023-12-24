import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cs = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cs('account')}>
            <div className={cs('avatar')}>
                <img src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0d4d294f3b4630adbdf1f2bb031c4508~c5_300x300.webp?lk3s=a5d48078&x-expires=1703577600&x-signature=o9kXD3bUvgKWH0kNn9fVBlGSgXM%3D" />
            </div>
            <div className={cs('info')}>
                <p className={cs('name')}>
                    beatvn_official
                    <FontAwesomeIcon className={cs('blueTick')} icon={faCircleCheck} />
                </p>
                <p className={cs('nickname')}>BEATVN</p>
            </div>

            <span className={cs('option')}>
                <FontAwesomeIcon icon={faEllipsis} />
            </span>
        </div>
    );
}

export default AccountItem;
