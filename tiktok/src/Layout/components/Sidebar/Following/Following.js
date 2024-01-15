import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from  './Following.module.scss'

const cs = classnames.bind(styles)

function Following({children, viewMore, hide}) {
    return (   <div className={cs('wrapper')}>
        <h2 className={cs('heading')}>Các tài khoản đang follow</h2>
        {children}

        { !hide &&
            <button className={cs('viewMoreBtn')} onClick={viewMore}>
            <p>
            Xem thêm
            </p>
        </button>
        }

    </div>  );
}

Following.propTypes = {
    children: PropTypes.node.isRequired,
    viewMore : PropTypes.func,
    hide: PropTypes.bool
}


export default Following;