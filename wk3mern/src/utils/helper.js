// src/utils/helpers.js

// ✅ Format a date into a readable format (e.g., January 5, 2025)
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

// ✅ Generate a random unique ID (useful for tasks or components)
export const generateId = () => {
  return Math.random().toString(36).substring(2, 11);
};

// ✅ Save data to localStorage
export const saveToLocalStorage = (key, value) => {
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(value));
};

// ✅ Get data from localStorage
export const getFromLocalStorage = (key) => {
  if (!key) return null;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// ✅ Remove data from localStorage
export const removeFromLocalStorage = (key) => {
  if (!key) return;
  localStorage.removeItem(key);
};

// ✅ Capitalize the first letter of any string
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};
