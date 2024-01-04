import classNames from 'classnames/bind';
import styles from './SideButton.module.scss';
import Button from '../../../../components/Buttons/Button';
import PropTypes from 'prop-types'

const cs = classNames.bind(styles);

function SideButton({ title, buttonText }) {
    return (
        <div className={cs('wrapper')}>
            <p className={cs('description')}>{title}</p>
            <Button outline={true} large={true}>
                {buttonText}
            </Button>
        </div>
    );
}

SideButton.propTypes = {
    title : PropTypes.string,
    buttonText : PropTypes.string
}


export default SideButton;
