var list = [];

function store(number) {
  list.push(number);
  return list;
}


module.exports = {
  order: function(arr) {
    var order = store(arr).sort()
    return order;
  }
};