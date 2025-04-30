export default function getEarliestItems (news, quatity) {
    return news .sort((a, b) => b.createdDate - a.createdDate)
                .slice(0, quatity)
}