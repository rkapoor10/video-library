export const updateLocalStorage = (key, value) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const updatedData = {...userData, [key]:value};
    localStorage.setItem("user", JSON.stringify(updatedData));
}
