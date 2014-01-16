// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Elements to be made the same height under all conditions
BALANCE['same-height-groups'] = {};

// Create an object -- groups -- with key the group # and value the elems in that group
$('.same-height[data-group]').each(function(){
    var $this = $(this);
    if ( !( $this.attr('data-group') in BALANCE['same-height-groups'] ) ) {
        BALANCE['same-height-groups'][ $this.attr('data-group') ] = $('.same-height[data-group="' + $this.attr('data-group') + '"]');
    }
});
BALANCE.makeSameHeight = function() {
    for (var i in BALANCE['same-height-groups']) {
        var targetHeight = 0;

        BALANCE['same-height-groups'][i].height('auto').each(function() {
            var $this = $(this);
            targetHeight = $this.height() > targetHeight ? $this.height() : targetHeight;
        }).height(targetHeight);
    }
}
// Call this a bunch of times -- there's some weird cross-browser issues
$(document).ready(BALANCE.makeSameHeight);
$(window).on('load resize', BALANCE.makeSameHeight);

// popup links
$('body').on('click', '.popup', function(e){
  e.preventDefault();
  window.open($(this).attr('href'),'share','height=420,width=480,fulscreen=no,location=yes,statusbar=no,toolbar=no,resizeable=yes',false);
});

// Cookies
function cGet(name){
    var b, c = document.cookie.split("; "), num = c.length; 
    do { b = c[num - 1].split("="); 
        if (b[0] === name) { return b[1] || ''; } 
    } while(--num); return null;
}
function cSet(name, v, exp) { 
    document.cookie = name+"="+v+"; path=/; domain="+window.location.hostname+";"+((exp)?"expires="+new Date(new Date().getTime()+(exp*864e5)).toGMTString():'');
}

// Placeholdr, Copyright (c) 2013 Shane Carr
// https://github.com/vote539/placeholdr
// X11 License
(function(b,c,e,d){var h=function(){var a=b(this);a[d]()||(a.addClass(c),"password"===a.attr("type")&&(a.attr("type","text"),a.data(c+"-pwd",!0)),a[d](a.attr(e)))},f=function(){var a=b(this);a.removeClass(c);a.data(c+"-pwd")&&a.attr("type","password");if(a[d]()===a.attr(e))a[d]("")},k=function(){b(this).find("["+e+"]").each(function(){b(this).data(c)&&f.call(this)})};b.fn.placeholdr=function(){e in document.createElement("input")||(b(this).find("["+e+"]").each(function(){var a=b(this);a.data(c)||
(a.data(c,!0),h.call(this),a.focus(f),a.blur(h))}),b(this).find("form").each(function(){var a=b(this);a.data(c)||(a.data(c,!0),a.submit(k))}))};b.fn[d]=b.fn.val;b.fn.val=function(a){var g=b(this);if("undefined"===b.type(a)&&g.data(c)&&g[d]()===g.attr(e))return"";"string"===b.type(a)&&f.call(this);return b.fn[d].apply(this,arguments)};b(function(){b(document).placeholdr()});document.write("<style>.placeholdr{color:#AAA;}</style>")})(jQuery,"placeholdr","placeholder","placeholdrVal");

/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */(function(){function t(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(!window.addEventListener)return;var e=window.StyleFix={link:function(t){try{if(t.rel!=="stylesheet"||t.hasAttribute("data-noprefix"))return}catch(n){return}var r=t.href||t.getAttribute("data-href"),i=r.replace(/[^\/]+$/,""),s=(/^[a-z]{3,10}:/.exec(i)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],u=/^([^?]*)\??/.exec(r)[1],a=t.parentNode,f=new XMLHttpRequest,l;f.onreadystatechange=function(){f.readyState===4&&l()};l=function(){var n=f.responseText;if(n&&t.parentNode&&(!f.status||f.status<400||f.status>600)){n=e.fix(n,!0,t);if(i){n=n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,n){return/^([a-z]{3,10}:|#)/i.test(n)?e:/^\/\//.test(n)?'url("'+s+n+'")':/^\//.test(n)?'url("'+o+n+'")':/^\?/.test(n)?'url("'+u+n+'")':'url("'+i+n+'")'});var r=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");n=n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+r,"gi"),"$1")}var l=document.createElement("style");l.textContent=n;l.media=t.media;l.disabled=t.disabled;l.setAttribute("data-href",t.getAttribute("href"));a.insertBefore(l,t);a.removeChild(t);l.media=t.media}};try{f.open("GET",r);f.send(null)}catch(n){if(typeof XDomainRequest!="undefined"){f=new XDomainRequest;f.onerror=f.onprogress=function(){};f.onload=l;f.open("GET",r);f.send(null)}}t.setAttribute("data-inprogress","")},styleElement:function(t){if(t.hasAttribute("data-noprefix"))return;var n=t.disabled;t.textContent=e.fix(t.textContent,!0,t);t.disabled=n},styleAttribute:function(t){var n=t.getAttribute("style");n=e.fix(n,!1,t);t.setAttribute("style",n)},process:function(){t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);t("style").forEach(StyleFix.styleElement);t("[style]").forEach(StyleFix.styleAttribute)},register:function(t,n){(e.fixers=e.fixers||[]).splice(n===undefined?e.fixers.length:n,0,t)},fix:function(t,n,r){for(var i=0;i<e.fixers.length;i++)t=e.fixers[i](t,n,r)||t;return t},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};(function(){setTimeout(function(){t('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()})();(function(e){function t(e,t,r,i,s){e=n[e];if(e.length){var o=RegExp(t+"("+e.join("|")+")"+r,"gi");s=s.replace(o,i)}return s}if(!window.StyleFix||!window.getComputedStyle)return;var n=window.PrefixFree={prefixCSS:function(e,r,i){var s=n.prefix;n.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(e,t,n,r){return t+(n||"")+"linear-gradient("+(90-r)+"deg"}));e=t("functions","(\\s|:|,)","\\s*\\(","$1"+s+"$2(",e);e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+s+"$2$3",e);e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+s+"$2:",e);if(n.properties.length){var o=RegExp("\\b("+n.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(o,s+"$1")},e)}if(r){e=t("selectors","","\\b",n.prefixSelector,e);e=t("atrules","@","\\b","@"+s+"$1",e)}e=e.replace(RegExp("-"+s,"g"),"-");e=e.replace(/-\*-(?=[a-z]+)/gi,n.prefix);return e},property:function(e){return(n.properties.indexOf(e)?n.prefix:"")+e},value:function(e,r){e=t("functions","(^|\\s|,)","\\s*\\(","$1"+n.prefix+"$2(",e);e=t("keywords","(^|\\s)","(\\s|$)","$1"+n.prefix+"$2$3",e);return e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+n.prefix})},prefixProperty:function(e,t){var r=n.prefix+e;return t?StyleFix.camelCase(r):r}};(function(){var e={},t=[],r={},i=getComputedStyle(document.documentElement,null),s=document.createElement("div").style,o=function(n){if(n.charAt(0)==="-"){t.push(n);var r=n.split("-"),i=r[1];e[i]=++e[i]||1;while(r.length>3){r.pop();var s=r.join("-");u(s)&&t.indexOf(s)===-1&&t.push(s)}}},u=function(e){return StyleFix.camelCase(e)in s};if(i.length>0)for(var a=0;a<i.length;a++)o(i[a]);else for(var f in i)o(StyleFix.deCamelCase(f));var l={uses:0};for(var c in e){var h=e[c];l.uses<h&&(l={prefix:c,uses:h})}n.prefix="-"+l.prefix+"-";n.Prefix=StyleFix.camelCase(n.prefix);n.properties=[];for(var a=0;a<t.length;a++){var f=t[a];if(f.indexOf(n.prefix)===0){var p=f.slice(n.prefix.length);u(p)||n.properties.push(p)}}n.Prefix=="Ms"&&!("transform"in s)&&!("MsTransform"in s)&&"msTransform"in s&&n.properties.push("transform","transform-origin");n.properties.sort()})();(function(){function i(e,t){r[t]="";r[t]=e;return!!r[t]}var e={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};e["repeating-linear-gradient"]=e["repeating-radial-gradient"]=e["radial-gradient"]=e["linear-gradient"];var t={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"};n.functions=[];n.keywords=[];var r=document.createElement("div").style;for(var s in e){var o=e[s],u=o.property,a=s+"("+o.params+")";!i(a,u)&&i(n.prefix+a,u)&&n.functions.push(s)}for(var f in t){var u=t[f];!i(f,u)&&i(n.prefix+f,u)&&n.keywords.push(f)}})();(function(){function s(e){i.textContent=e+"{}";return!!i.sheet.cssRules.length}var t={":read-only":null,":read-write":null,":any-link":null,"::selection":null},r={keyframes:"name",viewport:null,document:'regexp(".")'};n.selectors=[];n.atrules=[];var i=e.appendChild(document.createElement("style"));for(var o in t){var u=o+(t[o]?"("+t[o]+")":"");!s(u)&&s(n.prefixSelector(u))&&n.selectors.push(o)}for(var a in r){var u=a+" "+(r[a]||"");!s("@"+u)&&s("@"+n.prefix+u)&&n.atrules.push(a)}e.removeChild(i)})();n.valueProperties=["transition","transition-property"];e.className+=" "+n.prefix;StyleFix.register(n.prefixCSS)})(document.documentElement);
(function($){

	var win = $(window),
		body = $('body'),
		page = $('#page');

	// ----- Nav menu

	var menuTargets = $('[menu-target]');

	function activateMenu() {
		$('#' + this.getAttribute('menu-target')).addClass('active');
	}
	function deactivateMenu() {
		var target = $('#' + this.getAttribute('menu-target'));
		target.is(':hover') ?
			'' :
			target.removeClass('active');

		if ( !target.hasClass('listening') ) {
			target.mouseleave(function(){
				target.removeClass('active');
			});
			target.addClass('listening');
		}
	}
	menuTargets.mouseenter( activateMenu ).mouseleave( deactivateMenu );

	// ----- Small screen menu

	var smallScreenMenu = $('#small-screen-menu');
	$('#small-screen-menu-icon').click(function(){
		if ( !body.hasClass('small-screen-menu-active') ) {
			page.animate({
				left: '-75%'
			});
			smallScreenMenu.animate({
				left: '25%'
			});
		} else {
			page.animate({
				left: 0
			});
			smallScreenMenu.animate({
				left: '100%'
			});
		}
		body.toggleClass('small-screen-menu-active');
	});

	// ----- Pages: make the masthead the height of the screen

	var masthead = $('#masthead');
	function setMastheadHeight() {
		masthead.css('height', !body.hasClass('admin-bar') ? win.height() : win.height() - 28);
	};
	setMastheadHeight();
	win.on('load resize', setMastheadHeight);

	// ----- Home page scrolling

	var homeSections = $('.home main > section');
	function lightUpSection() {
		homeSections.each(function(){
			var $this = $(this);
			if ( win.scrollTop() - $this.offset().top > -150 && win.scrollTop() - $this.offset().top <= $this.outerHeight() - 100 ) {
				$this.addClass('active');
			} else {
				$this.removeClass('active');
			}
		});
	}
	if (body.hasClass('home')) {
		win.on('load scroll', lightUpSection);
	}

	// ----- Home page updates and specials

	$('#updates-specials .header').click(function(){
		$(this).toggleClass('active').next().slideToggle();
	});

	// ----- "Scroll down" paragraph (if only on one line)

	var p = $('.scroll-down p');
	function posScrollDownP() {
		p.css('top', p.height() < 44 ? 0.5 * ( 44 - p.height() ) : 0 )
	}
	win.on('load resize', posScrollDownP);

	// ----- Scroll back up to the top of the page
	body.on('click', '.scroll-up', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		$(this).parent().css({
			'padding-right': '3.5em' // prevent text in the heading from bumping into the scroll up arrow
		});
	})

	// ----- Instructors
	
	var instructors = $('.instructor');
	instructors.click(function(){
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active').siblings().removeClass('active');
			$this.parent().next().slideUp().html( $this.attr('data-bio') ).delay(100).slideDown();
		} else {
			$this.removeClass('active');
			$this.parent().next().slideUp();
		}
	});

	// ----- Studio

	var features = $('.page-template-pagesstudio-php .feature');
	features.find('.heading, img').click(function(){
		$(this).parent().find('.description').slideToggle();
	});

	// ----- Remove the preload class

	win.load(function(){
		$('.preload').removeClass('preload');
	});

}(jQuery));