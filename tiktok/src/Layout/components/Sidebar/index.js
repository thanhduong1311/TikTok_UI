import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Menu, MenuItem } from './Menu';
import icons from '../../../components/Icons';
import SideButton from './SidebarButton';

const cs = classNames.bind(styles);

function Sidebar() {

    const userLogin = false;


    return (
        <aside className={cs('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={'/'}
                    icon={<img src={icons.home} />}
                    activeIcon={<img src={icons.homeActive} />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={'/following'}
                    icon={<img src={icons.friends} />}
                    activeIcon={<img src={icons.friendsActive} />}
                />
                <MenuItem
                    title="Khám Phá"
                    to={'/explorer'}
                    icon={<img src={icons.explorer} />}
                    activeIcon={<img src={icons.explorerActive} />}
                />
                <MenuItem
                    title="LIVE"
                    to={'/live'}
                    icon={<img src={icons.media} />}
                    activeIcon={<img src={icons.mediaActive} />}
                />
                <MenuItem
                    title="Hồ sơ"
                    to={'/profile'}
                    icon={<img src={icons.user} />}
                    activeIcon={<img src={icons.userActive} />}
                />
            </Menu>

            {!userLogin && <SideButton
                buttonText={'Đăng Nhập'}
                title={'Đăng nhập để follow các tác giả, thích video và xem bình luận.'}
            />}
        </aside>
    );
}

export default Sidebar;
