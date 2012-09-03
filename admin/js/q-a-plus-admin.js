$=jQuery.noConflict();

/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(a){a.cookie=function(g,f,k){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(f))||f===null||f===undefined)){k=a.extend({},k);if(f===null||f===undefined){k.expires=-1}if(typeof k.expires==="number"){var h=k.expires,j=k.expires=new Date();
j.setDate(j.getDate()+h)}f=String(f);return(document.cookie=[encodeURIComponent(g),"=",k.raw?f:encodeURIComponent(f),k.expires?"; expires="+k.expires.toUTCString():"",k.path?"; path="+k.path:"",k.domain?"; domain="+k.domain:"",k.secure?"; secure":""].join(""))}k=f||{};var b=k.raw?function(i){return i}:decodeURIComponent;var c=document.cookie.split("; ");for(var e=0,d;d=c[e]&&c[e].split("=");e++){if(b(d[0])===g){return b(d[1]||"")}}return null}})(jQuery);

/* VTip */

this.vtip=function(){this.xOffset=-10;this.yOffset=10;$(".vtip").unbind().hover(function(e){this.t=this.title;this.title='';this.top=(e.pageY+yOffset);this.left=(e.pageX+xOffset);$('body').append('<p id="vtip"><img id="vtipArrow" />'+this.t+'</p>');$('p#vtip').css("top",this.top+"px").css("left",this.left+"px").fadeIn("slow");},function(){this.title=this.t;$("p#vtip").fadeOut("slow").remove();}).mousemove(function(e){this.top=(e.pageY+yOffset);this.left=(e.pageX+xOffset);$("p#vtip").css("top",this.top+"px").css("left",this.left+"px");});};

jQuery(document).ready(function($){
	vtip();
	$( "#tabs" ).tabs();
	
	if ( $.cookie('qaplus_tab')) {
		var tabID = $.cookie('qaplus_tab');
		$('#' + tabID ).click();
	}
	
	$('.tab-anchor').on( 'click', function() {
		var tabID = $(this).attr('id');
		$.cookie('qaplus_tab', tabID, { expires: 1 });
	});

	$('a.dismiss').live( 'click', function() {
		$(this).parent().parent().parent().fadeOut();
	});
	
	$('#createPage').submit(pfwkajaxSubmit);
	 	
	function pfwkajaxSubmit(){
	 
	var ajaxData = jQuery(this).serialize();
	 
	jQuery.ajax({
	type:"POST",
	url: ajaxurl,
	data: ajaxData,
	success:function(data){
	$("#feedback").html(data);
	}
	});
	
	$('#createPage, #dismissQaplus').hide();

	var delay = 2000;
	setTimeout(function() { 
        $('#feedback').parent().fadeOut();
    }, delay
	) 

	return false;
	}
	
	
	$('#dismissQaplus').submit(dismissQaplusAjaxSubmit);
	 	
	function dismissQaplusAjaxSubmit() {
	 
	var ajaxData = jQuery(this).serialize();
	 
	jQuery.ajax({
	type:"POST",
	url: ajaxurl,
	data: ajaxData,
	success:function(data){
	$("#feedback").html(data);
	}
	});
	$('#dismissQaplus').parent().fadeOut();
	return false;
	}
	
	

})