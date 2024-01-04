import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

const cs = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cs('container')}>
                <Sidebar />
                <div className={cs('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children : PropTypes.node.isRequired
}

export default DefaultLayout;
