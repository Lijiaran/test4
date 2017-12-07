$(document).ready(function(){
	$("#fullPage").fullpage({
		verticalCentered:false,
		navigation: true,
		navigationTooltips: ['首页','关于我','前端技能','个人作品','联系我'],
		afterLoad:function(link, index) {
			switch(index) {
				case 1:
					move('.section1 h2').scale(1.5).end(function(){
                        					move('.section1 h2').scale(1).end();
                        				})
					break;
				case 4:
					move(".section4 .img1").rotate(352).end(function() {
						move(".section4 .img2").rotate(372).end(function() {
							move(".section4 .img3").rotate(362).end();
						});
					});
					break;
			}
		},
		onLeave: function(index,link) {
			if (index==4) {
				move(".section4 .img1").rotate(0).end(function() {
						move(".section4 .img2").rotate(0).end(function() {
							move(".section4 .img3").rotate(0).end();
						});
					});
			};
		}
		
	});
	$("#jquery_jplayer_1").jPlayer({
	  ready: function () {
	    $(this).jPlayer("setMedia", {
	       mp3: "MC.mp3",  m4a: "media/mysound.mp4",  oga: "media/mysound.ogg"
	    }).jPlayer("play").jPlayer("repeat");
	  },
	 swfPath: "jPlayer",
	 supplied: "mp3, m4a, oga"
	});
})
