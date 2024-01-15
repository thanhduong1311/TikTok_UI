import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import SimpleBar from 'simplebar-react';
import icons from '../../../components/Icons';
import 'simplebar-react/dist/simplebar.min.css';
import SideButton from './SidebarButton';
import SidebarFooter from './SidebarFooter/SidebarFooter';
import styles from './Sidebar.module.scss';
import { Menu, MenuItem } from './Menu';
import { FooterMenu, MenuItem as FooterMenuItem } from '../Footer';
import Following from './Following/Following';
import { getAccountsService } from '../../../services/getAccountsService';
import AccountItem from '../../../components/AccountItem';

const cs = classNames.bind(styles);

const menu1 = ['Giới thiệu', '  Bảng tin', 'Liên hệ', 'Sự nghiệp'];
const menu2 = [
    'TikTok for Good',
    'Quảng cáo',
    'TikTok LIVE Creator Networks',
    'Developers',
    'Minh bạch',
    'TikTok Rewards',
    'TikTok Embeds',
];
const menu3 = ['Trợ giúp', 'An toàn', 'Điều khoản', 'Quyền riêng tư', 'Cổng thông tin Tác giả', 'Hướng dẫn Cộng đồng'];
const menu4 = ['Thêm'];

function Sidebar({ viewMore }) {
    const [followingAccounts, setFollowingAccounts] = useState([]);
    const [resultSize, setResultSize] = useState(5);
    const [items, setItems] = useState([]);

    const ref = useRef();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getAccountsService('Phương', 'more');
            setFollowingAccounts(result);
            setItems(result.slice(0, 5));
        };

        fetchApi();
    }, []);

    const userLogin = true;

    const handleMore = () => {
        const newResultSize = resultSize + 5
        setResultSize(newResultSize)
        setItems(followingAccounts.slice(0, newResultSize));
    };

    return (
        <SimpleBar ref={ref} forceVisible={false} className={cs('customScrollBar')}>
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

                {!userLogin && (
                    <SideButton
                        buttonText={'Đăng Nhập'}
                        title={'Đăng nhập để follow các tác giả, thích video và xem bình luận.'}
                    />
                )}

                <Following viewMore={handleMore} hide={followingAccounts.length <= resultSize}>
                 
                    {items.map((data) => (
                        <AccountItem key={data.id} data={data} isSidebarItem={true} />
                    ))}
                </Following>

                <SidebarFooter />

                <FooterMenu>
                    {menu1.map((item, index) => (
                        <FooterMenuItem href="" content={item} key={index} />
                    ))}
                </FooterMenu>

                <FooterMenu>
                    {menu2.map((item, index) => (
                        <FooterMenuItem href="" content={item} key={index} />
                    ))}
                </FooterMenu>

                <FooterMenu>
                    {menu3.map((item, index) => (
                        <FooterMenuItem href="" content={item} key={index} />
                    ))}
                </FooterMenu>

                <FooterMenu>
                    {menu4.map((item, index) => (
                        <FooterMenuItem href="" content={item} key={index} />
                    ))}
                </FooterMenu>
                <FooterMenu>
                    <FooterMenuItem href="#" content={'© 2024 TikTok'} />
                </FooterMenu>
            </aside>
        </SimpleBar>
    );
}

export default Sidebar;
