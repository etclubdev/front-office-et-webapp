import './SearchSuggestions.css';
import { etNews } from '../../mocks/data';
import { findSimilarEtNews, findTop3LatestNews } from '../../utils/findEtNews';

let searchData = [];
searchData = etNews.etnews;

export const SearchSuggestions = ({ target }) => {
    
    if (target){
        searchData = findSimilarEtNews(searchData, target);
    }
    else{
        searchData = findTop3LatestNews(searchData);
    }
    
    return (
        <div className="suggestions">
            <p className='suggestions-text'>Bạn có thể sẽ quan tâm</p>
            {
                searchData.map(item => (
                    <div key={item.postId} className="suggestion">
                        <p className='suggestion-type'>ET News</p>
                        <div className='suggestion-post'>
                            <img className='suggestion-img' src={require(`../../mocks${item.thumbnailImage}`)} alt="" />
                            <div className="suggestion-content">
                                <p className="suggestion-title">{item.title}</p>
                                <p className="suggestion-desc">{item.shortDesc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}