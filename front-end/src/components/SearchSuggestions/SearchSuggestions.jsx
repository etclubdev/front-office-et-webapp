import './SearchSuggestions.css';
import { getPostType } from "../../utils/getPostTypeUtil";
import { useNavigate } from 'react-router-dom';
import { trimText } from '../../utils/trimTextUtil';

export const SearchSuggestions = ({ searchData }) => {

    const navigate = useNavigate();

    const onClick = (to, id) => {
        navigate(`${to}/${id}`);
    }

    return (
        <div className="suggestions">
            {
                searchData?.map(item => {
                    const postType = getPostType(item.table);

                    return (
                        <div key={item[postType.id]} className="suggestion" onClick={() => onClick(postType.to, item[postType.id])}>
                            <p className='suggestion-type'>{postType.type}</p>
                            <div className='suggestion-post'>
                                <img className='suggestion-img' src={item?.thumbnail_image_url} alt="" />
                                <div className="suggestion-content">
                                    <p className="suggestion-title">{item.title}</p>
                                    <p className="suggestion-desc">{trimText(item.meta_description, 100)}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}