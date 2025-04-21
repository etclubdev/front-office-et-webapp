export default function filterEtNews(news) {
    const filteredNews = [
        {
            title: "Công nghệ thế giới",
            news: []
        },
        {
            title: "Công nghệ Việt Nam",
            news: []
        },
        {
            title: "Tin chính phủ số",
            news: []
        }
    ];
    news.forEach( item => {
        switch (item.category){
            case 'Tin công nghệ Thế giới': {
                filteredNews[0].news.push(item)
                break;
            }
            case 'Tin công nghệ Việt Nam': {
                filteredNews[1].news.push(item)
                break;
            }
            case 'Tin chính phủ số': {
                filteredNews[2].news.push(item)
                break;
            }
        }
        
    })

    return filteredNews;
}