


const store = [];

const STORAGE_AGE = 'todoStorage'

class Info {
  constructor(title, details, completed = false) {
    this.title = title;
    this.details = details;
    this.completed = completed;
  }
}

function saveUp() {
  localStorage.setItem(STORAGE_AGE, JSON.stringify(store))
}

function loadUp() {
  const rawData = localStorage.getItem(STORAGE_AGE) || '[]'
  const originalData = JSON.parse(rawData)
  store.length = 0
  originalData.forEach(obj => {
    const info = new Info(obj.title, obj.details, !!obj.completed)
    store.push(info)
  })
}

function addToStore(userInfo) {
  store.push(userInfo);
}

export { store, Info, addToStore, saveUp, loadUp }