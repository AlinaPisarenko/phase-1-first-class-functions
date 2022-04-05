function receivesAFunction(cb) {
  return cb();
}
function returnsANamedFunction() {
  return function something() {};
}
function returnsAnAnonymousFunction() {
  return function () {};
}
