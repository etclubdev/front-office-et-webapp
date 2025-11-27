/* eslint-disable react-hooks/exhaustive-deps */
import './SearchPage.css';
import { SearchSuggestions } from '../../components/SearchSuggestions/SearchSuggestions';
import { useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

import { searchAcrossTables } from '../../api/search.service';

export const SearchPage = () => {
    const [target, setTarget] = useState("");
    const [showClear, setShowClear] = useState(false);
    const [results, setResults] = useState([]);
    const inputRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();

    const debouncedSearch = useCallback(
        debounce((value) => {
            setTarget(value);
        }, 300),
        []
    );

    const fetchData = useCallback(async () => {
        if (!target) return;

        try {
            const response = await searchAcrossTables(target);
            setResults(response.data);
        } catch (err) {
            console.error('Lỗi khi tìm kiếm:', err);
        }
    }, [target]);

    useEffect(() => {
        fetchData();
    }, [target, fetchData]);

    const handleChange = (e) => {
        const text = e.target.value;
        setShowClear(text.length > 0);
        debouncedSearch(e.target.value);
    };

    const clearInput = () => {
        setShowClear(false);
        setTarget("");
        if(inputRef.current) {
            inputRef.current.value = "";
            inputRef.current.focus();
        }
        setResults();
    }

    const handleClose = () => {
        console.log(location.state?.from);
        
        const from = location.state?.from || '/';
        navigate(from);
    };

    return (
        <div className="search-section">
            <div className="search-container">
                <div className="search-close">
                    <button className="close-btn" onClick={handleClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="search-input-wrapper">
                    <FontAwesomeIcon className='search-icon-left' icon={faSearch}/>
                    {/* <div className="vertical-bar"></div> */}
                    <input
                        ref={inputRef}
                        placeholder='Nhập từ khóa tìm kiếm bài đăng Hoạt động, ET News, ET Blog,...'
                        type="text"
                        onChange={handleChange}
                    />
                    
                    {showClear && (
                        <button className='inner-clear-btn' onClick={clearInput}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    )}
                </div>

                <SearchSuggestions searchData={results} />
            </div>
        </div>
    );
};
