import './SearchPage.css';
import { SearchSuggestions } from '../../components/SearchSuggestions/SearchSuggestions';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const SearchPage = () => {

    const [target, setTarget] = useState("");

    return (
        <div className="search-section">
            <div className="search-container">
                <div className="search-close">
                    <a href="/"><FontAwesomeIcon className='close-btn' color='#fff' icon={faTimes} /></a>
                </div>
                <div className="search-input">
                    <div className="vertical-bar"></div>
                    <input placeholder='Nhập từ khóa tìm kiếm' value={target} type="text" onChange={(e) => setTarget(e.target.value)}/>
                </div>
                <div className="horizontal-bar"></div>
                <SearchSuggestions target={target}/>
            </div>
        </div>
    )
}