import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cs = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [tabMenus, setTabMenus] = useState([{ data: items }]);

    const currentTab = tabMenus[tabMenus.length - 1];

    function renderItem() {}

    const backHandle = () => {
        setTabMenus((pre) => pre.slice(0, tabMenus.length - 1));
    };
    const handleResetToFirstPage = () =>  {s
        etTabMenus((pre) => pre.slice(0, 1))
    }

    return (
        <Tippy
            hideOnClick={false}
            interactive
            offset={[-110, -48]}
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cs('headerDropdown')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {tabMenus.length > 1 && <HeaderMenu title={currentTab.title} onClickBack={backHandle} />}

                        <div className={cs('menuBody')}>
                            {currentTab.data.map((item, index) => {
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
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
