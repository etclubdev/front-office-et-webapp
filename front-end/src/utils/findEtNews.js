export function findSimilarEtNews( news, name ) {
    return news.filter(item => item.title.includes(name.toUpperCase()));
}

export function findTop3LatestNews( news ) {
    return news
        .sort((a, b) => b.createdDate - a.createdDate)
        .slice(0, 3);
}