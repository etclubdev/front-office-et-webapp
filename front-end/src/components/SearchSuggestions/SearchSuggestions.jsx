import './SearchSuggestions.css';
import { etNews } from '../../mocks/data';

export const SearchSuggestions = ({ target }) => {
    let searchData = {};
    searchData.etNews = etNews.etnews;

    const findTop3Newest = () => {
        const top3NewestItems = searchData.etNews
            .sort((a, b) => b.createdDate - a.createdDate)
            .slice(0, 3)
        return top3NewestItems;
    }

    const findMostSimilar = () => {
        const mostSimilarItems = searchData.etNews
            .filter(item => item.title.includes(target.toUpperCase()))

        return mostSimilarItems;
    }

    if (target) searchData = findMostSimilar();
    else searchData = findTop3Newest();

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