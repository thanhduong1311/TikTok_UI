import Button from '../Buttons/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cs = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button onClick={onClick} href={data.href} to={data.to} className={cs('customButton')}>
            <span className={cs('btnContent')}>
                <span className={cs('menuIcon')}>{data.icon}</span>
                <span className={cs('menuItemContent')}>{data.title}</span>
            </span>
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
