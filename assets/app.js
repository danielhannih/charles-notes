;(() => {
  const storageID = "charles-notes"
  textarea.oninput = () =>
    window.localStorage.setItem(storageID, JSON.stringify(textarea.value))
  window.onload = () =>
    (textarea.value = JSON.parse(window.localStorage.getItem(storageID)))
})()
