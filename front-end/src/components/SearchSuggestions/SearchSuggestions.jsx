import './SearchSuggestions.css';
import { getPostType } from "../../utils/getPostTypeUtil";
import { useNavigate } from 'react-router-dom';
import { trimText } from '../../utils/trimTextUtil';

export const SearchSuggestions = ({ searchData }) => {

    const navigate = useNavigate();

    const onClick = (to, id) => {
        navigate(`${to}/${id}`);
    }

    if (!searchData || searchData.length === 0) return null;

    return (
        <div className="suggestions-container">
            {searchData?.map((item) => {
                const postType = getPostType(item.table);


                return (
                    <div
                        key={item[postType.id]}
                        className="suggestion-card"
                        onClick={() => onClick(postType.to, item[postType.id])}
                    >
                        <div className="suggestion-left">
                            <img
                                className="suggestion-thumb"
                                src={item?.thumbnail_image_url}
                                alt="thumbnail"
                            />
                        </div>


                        <div className="suggestion-right">
                            <p className="suggestion-title">{item.title}</p>
                            <p className="suggestion-desc">
                                {trimText(item.meta_description, 120)}
                            </p>
                        </div>


                        <div className="suggestion-type-tag">{postType.type}</div>
                    </div>
                );
            })}
        </div>
    );
}