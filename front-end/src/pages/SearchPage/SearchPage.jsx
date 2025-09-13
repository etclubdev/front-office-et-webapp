/* eslint-disable react-hooks/exhaustive-deps */
import './SearchPage.css';
import { SearchSuggestions } from '../../components/SearchSuggestions/SearchSuggestions';
import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { searchAcrossTables } from '../../api/search.service';

export const SearchPage = () => {
    const [target, setTarget] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

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
        debouncedSearch(e.target.value);
    };

    const handleClose = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1); // go back if possible
        } else {
            navigate('/'); // fallback to home
        }
    };

    return (
        <div className="search-section">
            <div className="search-container">
                <div className="search-close">
                    <button className="close-btn" onClick={handleClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className="search-input">
                    <div className="vertical-bar"></div>
                    <input
                        placeholder='Nhập từ khóa tìm kiếm'
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div className="horizontal-bar"></div>
                <SearchSuggestions searchData={results} />
            </div>
        </div>
    );
};
