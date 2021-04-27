export const getStoredNotebooks = () => {
  const notebookString = localStorage.getItem("notebooks");
  if (!notebookString) {
    return [];
  }
  try {
    return JSON.parse(notebookString);
  } catch {
    return [];
  }
};

export const addNotebook = (notebook) => {
  const storedItems = getStoredNotebooks();
  const updatedItems = [...storedItems, { ...notebook, id: uuidv4() }];

  try {
    localStorage.setItem("notebooks", JSON.stringify(updatedItems));
  } catch {
    // do nothing
  }
};

export const removeNotebook = ({ id }) => {
  const storedItems = getStoredNotebooks();
  const updatedItems = storedItems.filter((notebook) => notebook.id !== id);

  try {
    localStorage.setItem("notebooks", JSON.stringify(updatedItems));
  } catch {
    // do nothing
  }
};

export const clearCache = () => {
  localStorage.removeItem("notebooks");
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
