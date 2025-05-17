import './Error.css'

export const Error = () => {
    return (
        <div className='error-container'>
            <img src={require(`../../mocks/images/error/error.png`)} alt="null" className="error-img" />
            <p className="nav-item nav-item-content error-content">Something went wrong!</p>
            <p className="error-content-detail">We had a problem loading your content.</p>
            <p className="error-content-detail">Try refreshing the page.</p>
        </div>
    )
}
