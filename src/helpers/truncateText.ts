export const truncateText = (text: string, maxLength: number) => {
  if (text) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }
};