import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import * as request from '../../../utils/httpRequest';
import AccountItem from '../../../components/AccountItem';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import icons from '../../../components/Icons';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../../hooks';
import * as SearchService from '../../../services/searchService';


const cs = classNames.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(inputValue, 700);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async ()=> {
            setLoading(true);

            const result = await SearchService.search(debounce)
            setSearchResults(result)

            setLoading(false);

        }

        fetchApi()

        
    }, [debounce]);

    const inputRef = useRef();

    const handleClear = () => {
        setInputValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };

    const handleOutFocus = () => {
        setShowResult(false);
    };

    const handleFocus = () => {
        setShowResult(true);
    };

    const handleInput = (e) => {
        if (!e.target.value.trim() == '') {
            setInputValue(e.target.value);
        } else {
            setInputValue('');
        }
    };

    const handleSubmit = ()=> {

    }

    return (
        <div>
            <Tippy
                visible={showResult && searchResults.length != 0}
                interactive
                offset={[0, -52]}
                onClickOutside={handleOutFocus}
                render={(attrs) => (
                    <div className={cs('searchResult')} tabIndex="-1" {...attrs}>
                        {showResult && (
                            <PopperWrapper>
                                <h4 className={cs('searchResultLabel')}>Tài khoản</h4>
                                {searchResults.map((data) => (
                                    <AccountItem key={data.id} data={data} />
                                ))}
                            </PopperWrapper>
                        )}
                    </div>
                )}
            >
                <div className={cs('search')}>
                    <div className={cs('searchBox')}>
                        <input
                            type="text"
                            spellCheck="false"
                            placeholder="Tìm kiếm"
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => handleInput(e)}
                            onFocus={handleFocus}
                        />
                        <span></span>

                        {loading && <FontAwesomeIcon className={cs('searchLoad')} icon={faSpinner} />}
                        <button className={cs('clearSearch')} onClick={handleClear}>
                            {!!inputValue && !loading && <FontAwesomeIcon icon={faCircleXmark} />}
                        </button>
                    </div>

                    <button className={cs('searchBtn')}>
                        <img className='iconSearch' src={icons.search} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
