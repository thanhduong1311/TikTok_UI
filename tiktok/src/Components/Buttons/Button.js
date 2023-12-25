import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { children } from 'react';
import { Link } from 'react-router-dom';

const cs = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disable = false,
    rounder = false,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cs('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounder
      
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
