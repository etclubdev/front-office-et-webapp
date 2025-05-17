export function getPostType(table) {
    switch (table) {
        case 'et_news':
            return {
                id: 'etnews_id',
                type: 'ET News',
                to: '/et-news'
            }

        case 'et_blog':
            return {
                id: 'blog_id',
                type: 'ET Blog',
                to: '/et-blog'
            }

        case 'activity':
            return {
                id: 'activity_id',
                type: 'Hoạt động',
                to: '/activities'
            }
        default:
            return null
    }
}
