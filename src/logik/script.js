function getData(ev) {
	ev.preventDefault();
	console.log('EV', ev);
}

function goAheadLessons() {
	return (window.location.href = './lessons.html');
}
