


const store = [];

class Info {
  constructor(title, details) {
    this.title = title;
    this.details = details;
  }
}

function addToStore(userInfo) {
  store.push(userInfo);
}

export{store,Info,addToStore}