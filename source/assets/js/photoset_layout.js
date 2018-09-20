
function initializePhotosetContainer ( containerID, layout ) {

  var container = document.getElementById( containerID );
  var items, items = Array.prototype.slice.call( container.children );
  var i, j, className;

  for ( i = 0; i < layout.length; i++ ) {
    switch ( layout[ i ]) {
      case '2':
        className = 'half';
        break;
      case '3':
        className = 'third';
        break;
      default:
        continue;
    }

    for ( j = 0; j < parseInt( layout[ i ]); j++ ) {
      item = items[ 0 ];
      item.classList.add( className );
      items.shift();
    }
  }
}
