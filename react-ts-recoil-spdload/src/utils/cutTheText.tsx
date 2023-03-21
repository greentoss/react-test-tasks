export const cutTheText = (text: string, height: number) => {
    const lineHeight = 25;
    const lines = Math.floor(height / lineHeight);
    const totalChars = lines * 40;

    if (text.length <= totalChars) {
        return text;
    }

    return `${text.slice(0, totalChars).trim()}...`;
};
