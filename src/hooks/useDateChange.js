export const useDateChange = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const dateString = `${year}年${month}月${day}日 ${hour}:${minutes}`;
  return dateString;
};
