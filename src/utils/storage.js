export const saveUrl = (url) => {
  const id = Math.random().toString(36).substring(2, 8);
  const data = JSON.parse(localStorage.getItem('urls') || '{}');
  data[id] = url;
  localStorage.setItem('urls', JSON.stringify(data));
  return id;
};

export const getOriginalUrl = (id) => {
  const data = JSON.parse(localStorage.getItem('urls') || '{}');
  return data[id];
};

export const getAllUrls = () => {
  return JSON.parse(localStorage.getItem('urls') || '{}');
};
