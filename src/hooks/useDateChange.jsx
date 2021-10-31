export const useDateChange = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const minutesChange = () => {
    const minutesDigits = minutes.toString(10).length;
    if (minutesDigits === 1) {
      return `0${minutes}`;
    }
    return minutes;
  };

  const dateString = `${year}年${month}月${day}日 ${hour}:${minutesChange()}`;
  return dateString;
};
