document.onkeydown = function(evt) {
	evt = evt || window.event;

	if(evt.keyCode == 13) {
		var anchors = document.getElementsByTagName("a");
		var nextAnchor = null;

		for(var i = 0; i < anchors.length; i++) {
			var anchor = anchors[i];
			if((anchor.href.indexOf("doSubmit") != -1) && anchor.parentNode.align === "left") {
				nextAnchor = anchor;
				break;
			}
		}

		if(nextAnchor != null) {
			nextAnchor.click();
		}
	}	
}
