import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cs = classNames.bind(styles);


function AccountItem({data, isSidebarItem}) {

    const classes = cs('account', {
        isSidebarItem
    });
    

    return (
        <Link to={`/@${data.nickname}`} className={classes}>
            <div className={cs('avatar')}>
                <Image src={data.avatar}/>
            </div>
            <div className={cs('info')}>
                <p className={cs('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cs('blueTick')} icon={faCircleCheck} />}
                </p>
                <p className={cs('nickname')}>{data.nickname}</p>
            </div>

            <span className={cs('option')}>
                <FontAwesomeIcon icon={faEllipsis} />
            </span>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    isSidebarItem : PropTypes.bool
  };

export default AccountItem;
