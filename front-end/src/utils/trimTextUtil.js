export function trimText(text) {
    const maxLength = 160;
    if (text.length > maxLength) {
        return text.slice(0, maxLength - 3) + '...';
    }
    return text;
}