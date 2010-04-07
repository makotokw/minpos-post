(function($){
	var port = chrome.extension.connect({name: 'minpospost'});
	port.onMessage.addListener(function(data) {
		if (data && data.url) {
			$('input[name=url]').val(data.url);
			$('textarea[name=title]').val(data.title);
			$('input[name=check_url]').click();
		}
	});
	port.postMessage({fetchData:true});
})(jQuery);
