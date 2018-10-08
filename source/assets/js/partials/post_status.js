
(function () {

  @import '../helpers/chance.js';
  @import '../helpers/format_time.js';

  var status;

  if ( chance( 3 )) {

    status = 'Delivered';

  } else {
    var time;

    if ( chance() ) {
      var date = new Date()
      date.setHours( parseInt( Math.random() * date.getHours() ));
      date.setMinutes( parseInt( Math.random() * date.getMinutes() ));
      time = formatTime( date );
    } else {
      time = 'yesterday';
    }

    status = 'Read <small>' + time + '</small>';
  }

  if ( document.readyState === 'loading' ) {
    document.write( status );
  }

})();
