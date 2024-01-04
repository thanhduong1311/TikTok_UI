import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '../../assets/imgs';
import PropTypes from 'prop-types';

const cs = classNames.bind(styles);

const Image = forwardRef(({ src, fallback, ...props }, ref) => {
    const [fallbackUrl, setFallbackUrl] = useState('');

    const handleError = () => {
        setFallbackUrl(images.noImage);
    };

    return (
        <>
            <img ref={ref} className={cs('wrapper')} src={fallbackUrl || src} {...props} onError={handleError} />
        </>
    );
});

Image.propTypes = {
    src: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
