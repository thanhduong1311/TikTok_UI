import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(styles);


function HeaderMenu({title, onClickBack}) {
    return ( 
        <header className={cs('header')}>
            <button onClick={onClickBack} className={cs('backBtn')}>
            <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cs('headerTitle')}>
                {title}
            </h4>
        </header>
     );
}

export default HeaderMenu;