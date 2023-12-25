import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cs = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [tabMenus, setTabMenus] = useState([{ data: items }]);

    const currentTab = tabMenus[tabMenus.length - 1];

    function renderItem() {}

    const backHandle = () => {
        setTabMenus((pre) => pre.slice(0, tabMenus.length - 1));
    };

    return (
        <Tippy
            interactive
            offset={[-110, -48]}
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cs('headerDropdown')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {tabMenus.length > 1 && <HeaderMenu title={'Language'} onClickBack={backHandle} />}

                        {currentTab.data.map((item,index) => {
                            // convert sang boolean to check
                            const isParent = !!item.children;
                            return (
                                <MenuItem
                                    data={item}
                                    key={index}
                                    onClick={() => {
                                        if (isParent) {
                                            setTabMenus((pre) => [...pre, item.children]);
                                        } else {
                                            onChange(item);
                                        }
                                    }}
                                />
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
            onHide={()=> setTabMenus(pre => pre.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
