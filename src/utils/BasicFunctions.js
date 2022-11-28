export const getStorageItem = (name) => {
    return localStorage.getItem(name);
}

export const setStorageItem = (name, value) => {
    return localStorage.setItem(name, value);
}