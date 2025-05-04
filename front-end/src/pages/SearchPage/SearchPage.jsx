import './SearchPage.css';
import { SearchSuggestions } from '../../components/SearchSuggestions/SearchSuggestions';
import { useCallback, useState } from 'react';

import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const SearchPage = () => {
    const [target, setTarget] = useState("");

    // Debounced function để cập nhật target
    const debouncedSearch = useCallback(
        debounce((value) => {
            setTarget(value);
        }, 300), // 300ms debounce
        []
    );

    const handleChange = (e) => {
        debouncedSearch(e.target.value);
    };

    return (
        <div className="search-section">
            <div className="search-container">
                <div className="search-close">
                    <a href="/"><FontAwesomeIcon className='close-btn' icon={faTimes} /></a>
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
                <SearchSuggestions target={target} />
            </div>
        </div>
    );
};
