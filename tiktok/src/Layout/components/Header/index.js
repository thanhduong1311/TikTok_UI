import TippyTooltip from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../../../components/Buttons/Button';
import Menu from '../../../components/Menu';
import Image from '../../../components/Image';
import images from '../../../assets/imgs';
import icons from '../../../components/Icons';
import Search from '../Search';
import config from '../../../config';


const menuItems = [
    {
        icon: <img src={icons.create} />,
        title: 'Trung tâm Nhà sáng tạo Live',
        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <img src={icons.language} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    childrenId: 1,
                    title: 'English',
                    type: 'language',
                },
                {
                    childrenId: 2,
                    title: 'Tiếng Việt',
                    type: 'language',
                },
                {
                    childrenId: 3,
                    title: 'にほんご',
                    type: 'language',
                }
            ],
        },
    },
    {
        icon: <img src={icons.help} />,
        title: 'Phản Hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <img src={icons.keyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <img src={icons.nightMode} />,
        title: 'Chế độ tối',
    },
];

const userLoginMenu = [
    {
        icon: <img src={icons.user} />,
        title: 'Hồ Sơ',
        to: '/feedback',
    },
    {
        icon: <img src={icons.favorite} />,
        title: 'Yêu Thích',
    },
    {
        icon: <img src={icons.tiktok} />,
        title: 'Nhận xu',
    },
    {
        icon: <img src={icons.media} />,
        title: 'Live Studio',
    },
    {
        icon: <img src={icons.setting} />,
        title: 'Cài đặt',
    },
    ...menuItems,
    {
        icon: <img src={icons.logout} />,
        title: 'Đăng xuất',
        lastEle:true
    },
];

const cs = classNames.bind(styles);

function Header() {

    const userLogin = false;

    const handleMenuChange = (item) => {
        console.log(item);
    };

    return (
        <div className={cs('wrapper')}>
            <div className={cs('header')}>
                <Link to={config.routes.home} className={cs('logo')}>
                   <img src={images.logo} alt='TikTok'/>
                </Link>

                <Search/>

                <div className={cs('options')}>
                    <Button text onClick={() => {}}>
                    <span className={cs('btnContent')}>
                    <img className={cs('uploadIcon')} src={icons.add}/>
                        Tải lên
                    </span>
                    </Button>

                    {userLogin ? (
                        <>
                            <TippyTooltip content="Tin Nhắn">
                                <img className={cs('icons', 'send')} src={icons.send} />
                            </TippyTooltip>
                            <TippyTooltip content="Hộp Thư">
                            <img className={cs('icons', 'inbox')} src={icons.inbox} />
                            </TippyTooltip>
                            <Menu items={userLoginMenu} onChange={handleMenuChange}>
                                <Image 
                                    src={
                                        'https://tse1.mm.bing.net/th?id=OIP.AcexgUGeFcxhSyKXoOC5WQHaEK&pid=Api&P=0&h=180'
                                    }
                                    fallback=""
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary onClick={() => {}}>
                                Đăng nhập
                            </Button>
                            <Menu items={menuItems} onChange={handleMenuChange} className={cs('customMenu')}>
                                <span>
                                    <img className={cs('moreOption')} src={icons.menu} />
                                </span>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
