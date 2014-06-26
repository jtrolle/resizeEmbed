$.fn.resizeEmbed = function(options) {
		var defaults = {
		};
		var options = $.extend(defaults, options);
		var obj = $(this);

		obj.each(function() {
			var newWidth = $(this).parent().width();
			$(this)
			.attr('data-aspectRatio', this.height / this.width)
			.removeAttr('height')
			.removeAttr('width')
			.width(newWidth)
			.height(newWidth * $(this).attr('data-aspectRatio'));
		});

		$(window).on("resize",function() { 
			 obj.each(function() {
				var newWidth = $(this).parent().width();
				$(this)
				.width(newWidth)
				.height(newWidth * $(this).attr('data-aspectRatio'));
			 });                        
		});

		return this;
}