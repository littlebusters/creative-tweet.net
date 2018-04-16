jQuery(function($){
	var $topics = $( '.table-of-contents-chapter' );
	
	$topics.on( 'click', function( e ) {
		var $childElement = $( this ).children('.table-of-contents-topics');
		if( $childElement.hasClass( 'is-hidden' ) ) {
			$childElement.removeClass( 'is-hidden' );
		} else {
			$childElement.addClass( 'is-hidden' );
		}
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJza2V0Y2gzYmFzaWNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShmdW5jdGlvbigkKXtcblx0dmFyICR0b3BpY3MgPSAkKCAnLnRhYmxlLW9mLWNvbnRlbnRzLWNoYXB0ZXInICk7XG5cdFxuXHQkdG9waWNzLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcblx0XHR2YXIgJGNoaWxkRWxlbWVudCA9ICQoIHRoaXMgKS5jaGlsZHJlbignLnRhYmxlLW9mLWNvbnRlbnRzLXRvcGljcycpO1xuXHRcdGlmKCAkY2hpbGRFbGVtZW50Lmhhc0NsYXNzKCAnaXMtaGlkZGVuJyApICkge1xuXHRcdFx0JGNoaWxkRWxlbWVudC5yZW1vdmVDbGFzcyggJ2lzLWhpZGRlbicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGNoaWxkRWxlbWVudC5hZGRDbGFzcyggJ2lzLWhpZGRlbicgKTtcblx0XHR9XG5cdH0pO1xufSk7Il0sImZpbGUiOiJza2V0Y2gzYmFzaWNzLmpzIn0=
