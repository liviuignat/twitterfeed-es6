function get(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return null;
  }
}

function set(key, value) {
  const stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

function remove(key) {
  return localStorage.removeItem(key);
}

function clear() {
  return localStorage.clear();
}

export default {
  get, set, remove, clear
};
