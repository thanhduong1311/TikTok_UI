import classNames from 'classnames/bind';
import styles from './SidebarFooter.module.scss';
import PropTypes from 'prop-types';
import Button from '../../../../components/Buttons/Button';
import icons from '../../../../components/Icons';
import { Link } from 'react-router-dom';


const cs = classNames.bind(styles);

function SidebarFooter() {
    return <div className={cs('wrapper')}>
        <Link to={'/effect  '} className={cs('effectButton')}>
            <p>
            <img src={icons.effect}/>
            <span>Tạo hiệu ứng</span>
            </p>
        </Link>
    </div>;
}

export default SidebarFooter;
