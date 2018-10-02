(function(PIXI) {
	var firstTime = JSON.parse(localStorage.getItem('firstTime') || 'true');
	
	var app = new PIXI.Application({
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: firstTime ? 0xff0000 : 0x00ff00,
		legacy: true,
	});
	
	console.log(firstTime);
	 
	var label = new PIXI.Text(
		'Inital text',
		new PIXI.TextStyle({
			fontFamily: 'Arial',
			fontSize: 40,
			fontWeight: 'bold',
			fill: '#fff',
			wordWrap: true,
			wordWrapWidth: 1920,
		})
	);
	
	var lorem = 'Lorem ipsum dolor sit amet, vis et vidit tempor feugait, soleat feugait usu ad. Latine molestie id vim. Mollis accusata an qui, te albucius democritum nec, ne nihil gloriatur consectetuer his. ';
	var text = firstTime ? 'First time app started' : 'Not first time app started';
	var dots = '';
	
	setInterval(function() {
		label.text = lorem + text + dots;
		dots += '.';
	}, 1000);
	

	app.stage.addChild(label);
	document.body.appendChild(app.view);

	localStorage.setItem('firstTime', 'false');
	
	setTimeout(function() {
		location.reload();
	}, 10000);
})(window.PIXI);
