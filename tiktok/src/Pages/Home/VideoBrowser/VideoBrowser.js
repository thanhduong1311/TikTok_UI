import classnames from 'classnames/bind';
import styles from './VideoBrowser.module.scss';
import PropTypes from 'prop-types';

const cs = classnames.bind(styles);

function VideoBrowser({ children }) {
    return <div classnames={cs('wrapper')}>{children}</div>;
}

VideoBrowser.propTypes = {
    children: PropTypes.node.isRequired,
};

export default VideoBrowser;
