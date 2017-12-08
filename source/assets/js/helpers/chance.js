
function chance ( spread ) {
  spread = spread || 2;
  return Math.round( Math.random() * ( spread - 1)) == 0;
}
