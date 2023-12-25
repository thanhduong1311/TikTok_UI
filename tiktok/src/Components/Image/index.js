import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '../../assets/imgs';

const cs = classNames.bind(styles);

function Image({ src, fallback, ...props }, ref) {
    const [fallbackUrl, setFallbackUrl] = useState('');

    console.log(images.noImage)


    const handleError = () => {
        setFallbackUrl(images.noImage);
    };

    return (
        <>
            <img ref={ref} className={cs('wrapper')} src={fallbackUrl || src} {...props} onError={handleError} />
        </>
    );
}

export default forwardRef(Image);
