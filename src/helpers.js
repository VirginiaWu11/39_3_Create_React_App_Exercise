function choice(items) {
  const randomNum = Math.floor(Math.random() * items.length);
  return items[randomNum];
}

function remove(items, item) {
  const index = items.indexOf(item);

  return items.splice(index, 1);
}

export { choice, remove };
