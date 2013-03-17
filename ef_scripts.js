// JavaScript Document

function HideShow() {
	var e = document.getElementById('hide-show');
	var val;
	if( e.value == 'Hide' ) {
		e.value = 'Show';
		val = 'none';
	} else {
		e.value = 'Hide';
		val = 'block';
	}
	var l = document.getElementsByTagName('li');
	for( var i=0; i < l.length; i++ ) {
		l[i].style.display = val;
	}
}

function toggleBgOff(id)
{
	var e = document.getElementById(id);
	e.class = '';
}

function toggleBgOn(id)
{
	var e = document.getElementById(id);
	e.class = '';
}