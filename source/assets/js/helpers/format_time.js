
function formatTime ( date ) {

  var hours   = date.getHours()
  var minutes = date.getMinutes()

  if ( minutes < 10 ){
    minutes = '0' + minutes
  }

  var suffix = 'AM';
  if ( hours >= 12 ){
    suffix = 'PM';
    hours = hours - 12;
  }
  if ( hours == 0 ){
    hours = 12;
  }

  return hours + ':' + minutes + ' ' + suffix;
}
