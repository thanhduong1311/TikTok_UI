import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

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

HeaderMenu.propTypes = {
    title : PropTypes.string,
    onClickBack : PropTypes.func
}

export default HeaderMenu;