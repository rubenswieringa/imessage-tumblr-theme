
function openImage ( element, event, panorama ) {

  event = event || window.event;

  if ( event && ( event.metaKey || event.altKey )){
    return true;
  }

  if ( panorama )
  {
    var postID  = element.getAttribute( 'data-post-id' );
    var blogID  = element.getAttribute( 'data-blog-id' );
    var imageID = element.getAttribute( 'src' ).replace( /(^.+\/|(?:[a-z][0-9]_[0-9]{0,3}[a-z]?)?\.jpg$)/gi, '' );
    return window.parent.Tumblr.PanoLightboxInit( event, '/post/' + postID + '/pano_lightbox_iframe/' + blogID + '/' + imageID );
  }
  else
  {
    window.parent.Tumblr.Lightbox.init([{
      width:    element.getAttribute( 'data-photo-width-highres' ),
      height:   element.getAttribute( 'data-photo-height-highres' ),
      high_res: element.getAttribute( 'data-photo-url-highres' ),
      low_res:  element.getAttribute( 'data-photo-url-lowres' )
    }]);
    return false;
  }

  return true;
}
