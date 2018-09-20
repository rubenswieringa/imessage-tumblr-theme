
function openImage ( element, event, containerID, panorama ) {

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
    var openAt = 0;
    var container = containerID ? document.getElementById( containerID ) : null;
    var items = ( container ? Array.prototype.slice.call( container.querySelectorAll( 'img[data-photo-url-highres]' )) : [ element ]).map( function ( image, index ) {
      if ( image == element ) {
        openAt = index + 1;
      }
      return {
        width:    image.getAttribute( 'data-photo-width-highres' ),
        height:   image.getAttribute( 'data-photo-height-highres' ),
        high_res: image.getAttribute( 'data-photo-url-highres' ),
        low_res:  image.getAttribute( 'data-photo-url-lowres' )
      }
    });

    window.parent.Tumblr.Lightbox.init( items, openAt );

    return false;
  }

  return true;
}
