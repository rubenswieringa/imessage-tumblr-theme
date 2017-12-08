
function openImage ( element, event ) {

  event = event || window.event;

  if ( event && ( event.metaKey || event.altKey )){
    return true;
  }

  window.parent.Tumblr.Lightbox.init([{
    width:    element.getAttribute( 'data-photo-width-highres' ),
    height:   element.getAttribute( 'data-photo-height-highres' ),
    high_res: element.getAttribute( 'data-photo-url-highres' ),
    low_res:  element.getAttribute( 'data-photo-url-lowres' )
  }]);

  return false;
}
