export const randomStr = (len) => {
  const str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const strLen = str.length;
  let result = "";

  for (let i = 0; i < len; i++) {
    result = result + str[Math.floor(Math.random() * strLen)];
  }

  return result;
};
