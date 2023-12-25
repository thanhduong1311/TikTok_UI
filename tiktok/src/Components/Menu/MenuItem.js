import Button from '../Buttons/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cs = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button onClick={onClick} href={data.href} to={data.to} className={cs('customButton')}>
            <span className={cs('menuIcon')}>{data.icon}</span>
            <span className={cs('menuItemContent')}>{data.title}</span>
        </Button>
    );
}

export default MenuItem;
