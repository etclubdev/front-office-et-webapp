export default function getFirstSentence(paragraph) {
    const trimmedParagraph = paragraph?.trim();
    
    const match = trimmedParagraph?.match(/(.*?[.?!])\s/);

    let result = match?.[1];

    if (result?.length > 150)
        result = result.slice(0, 150) + "..."
    
    return match ? result: trimmedParagraph;
}
