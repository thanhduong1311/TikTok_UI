import Tippy from '@tippyjs/react/headless';
import TippyTooltip from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faCircleXmark,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faMoon,
    faKeyboard,
    faCircleQuestion,
    faGlobe,
    faLightbulb,
    faPaperPlane,
    faEnvelope,
    faUser,
    faBookmark,
    faCoins,
    faVideo,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import AccountItem from '../../../AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Buttons/Button';
import Menu from '../../../Menu';
import Image from '../../../Image';

const menuItems = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo Live',
        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
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
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản Hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

const userLoginMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Hồ Sơ',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Yêu Thích',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'Live Studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
    },
    ...menuItems,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
    },
];

const cs = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const userLogin = true;

    const handleMenuChange = (item) => {
        console.log(item);
    };

    return (
        <div className={cs('wrapper')}>
            <div className={cs('header')}>
                <div className={cs('logo')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="118"
                        height="42"
                        fill="currentColor"
                    >
                        <defs>
                            <symbol
                                xmlns="http://www.w3.org/2000/svg"
                                id="logo-dark-1ef9a37a"
                                data-count="1"
                                viewBox="0 0 118 42"
                            >
                                <path
                                    fill="#25F4EE"
                                    d="M9.875 16.842v-1.119A8.836 8.836 0 008.7 15.64c-4.797-.006-8.7 3.9-8.7 8.707a8.706 8.706 0 003.718 7.135A8.675 8.675 0 011.38 25.55c0-4.737 3.794-8.598 8.495-8.707z"
                                ></path>
                                <path
                                    fill="#25F4EE"
                                    d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a6.78 6.78 0 01-.11-1.202h-4.726l-.006 18.969a3.978 3.978 0 01-3.967 3.829 3.93 3.93 0 01-1.846-.46 3.949 3.949 0 003.22 1.662zm13.906-16.36v-1.055a6.506 6.506 0 01-3.583-1.068 6.571 6.571 0 003.583 2.123z"
                                ></path>
                                <path
                                    fill="#FE2C55"
                                    d="M20.409 11.043a6.54 6.54 0 01-1.616-4.315h-1.265a6.557 6.557 0 002.88 4.316zM8.706 20.365a3.98 3.98 0 00-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.936 3.936 0 01-.754-2.321 3.98 3.98 0 013.973-3.976c.409 0 .805.07 1.175.185v-4.833a8.837 8.837 0 00-1.175-.083c-.07 0-.134.006-.204.006v3.708a3.999 3.999 0 00-1.176-.185z"
                                ></path>
                                <path
                                    fill="#FE2C55"
                                    d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.621c0 4.802-3.902 8.714-8.706 8.714a8.669 8.669 0 01-4.988-1.579 8.69 8.69 0 006.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 006.579 2.116v-4.73c-.48 0-.94-.052-1.38-.148z"
                                ></path>
                                <path
                                    fill="#000"
                                    d="M17.413 24.348v-9.622a11.251 11.251 0 006.58 2.116v-3.676a6.571 6.571 0 01-3.584-2.123 6.61 6.61 0 01-2.888-4.315H14.06l-.006 18.968a3.978 3.978 0 01-3.967 3.83A3.99 3.99 0 016.86 27.87a3.991 3.991 0 01-2.133-3.523A3.98 3.98 0 018.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.669 8.669 0 004.988 1.58c4.798 0 8.707-3.913 8.707-8.714zm12.635-11.169h14.774l-1.354 4.232h-3.832v15.644h-4.778V17.41l-4.804.006-.006-4.238zm38.984 0h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006-.006-4.238zM45.73 19.502h4.733v13.553h-4.708l-.026-13.553zm6.617-6.374h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128h.006zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734V13.128zm-54.397 4.826a2.384 2.384 0 002.382-2.384 2.384 2.384 0 10-2.382 2.384z"
                                ></path>
                                <path
                                    fill="#25F4EE"
                                    d="M83.544 24.942a8.112 8.112 0 017.474-8.087 8.748 8.748 0 00-.709-.026c-4.478 0-8.106 3.631-8.106 8.113 0 4.482 3.628 8.113 8.106 8.113.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087z"
                                ></path>
                                <path
                                    fill="#FE2C55"
                                    d="M92.858 16.83c-.217 0-.505.012-.716.025a8.111 8.111 0 017.468 8.087 8.112 8.112 0 01-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"
                                ></path>
                                <path
                                    fill="#000"
                                    d="M91.58 28.887a3.94 3.94 0 01-3.94-3.945 3.94 3.94 0 117.882 0c0 2.18-1.77 3.945-3.942 3.945zm0-12.058c-4.477 0-8.106 3.631-8.106 8.113 0 4.482 3.629 8.113 8.106 8.113 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"
                                ></path>
                            </symbol>
                        </defs>
                        <use fill="#161823" xlinkHref="#logo-dark-1ef9a37a"></use>
                    </svg>
                </div>

                <Tippy
                    visible={searchResult.length != 0}
                    interactive
                    render={(attrs) => (
                        <div className={cs('searchResult')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cs('searchResultLabel')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cs('search')}>
                        <div className={cs('searchBox')}>
                            <input type="text" spellCheck="false" placeholder="Tìm kiếm" />
                            <span></span>
                            <FontAwesomeIcon className={cs('searchLoad')} icon={faSpinner} />
                            <button className={cs('clearSearch')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        </div>

                        <button className={cs('searchBtn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cs('options')}>
                    <Button text onClick={() => {}}>
                        <FontAwesomeIcon className={cs('uploadIcon')} icon={faPlus} />
                        Tải lên
                    </Button>

                    {userLogin ? (
                        <>
                            <TippyTooltip content="Tin Nhắn">
                                <FontAwesomeIcon className={cs('icons')} icon={faPaperPlane} />
                            </TippyTooltip>
                            <TippyTooltip content="Hộp Thư">
                                <FontAwesomeIcon className={cs('icons')} icon={faEnvelope} />
                            </TippyTooltip>
                            <Menu items={userLoginMenu} onChange={handleMenuChange}>
                                <Image
                                    src={
                                        'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/031ead30337d3bc55ba0a73aa2cf39b7~c5_720x720.jpeg?lk3s=a5d48078&x-expires=1703689200&x-signature=4MMnIYvpIH3ga%2FEsroT6G3V0kVM%3D'
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
                            <Menu items={menuItems} onChange={handleMenuChange}>
                                <span>
                                    <FontAwesomeIcon className={cs('moreOption')} icon={faEllipsisVertical} />
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
