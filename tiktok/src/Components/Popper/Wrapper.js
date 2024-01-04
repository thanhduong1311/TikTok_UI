import classNames from 'classnames/bind';
import style from './Popper.module.scss';
import PropTypes from 'prop-types';

const cs = classNames.bind(style);

function Wrapper({ children, className }) {
    return <div className={cs('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children : PropTypes.node.isRequired,
    classNames: PropTypes.string
}

export default Wrapper;
