function draw()
	{
		var ctx = document.getElementById("canvas").getContext("2d");
		var p = 0;
		setInterval(function(){
		if(p++>255)
		{
			p = 0;
		}
		for (var i = 0; i < 100; i++) {
			ctx.beginPath();
			ctx.moveTo(20+i*20,0);
			ctx.lineTo(20+i*20,800);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(0,20+i*20);
			ctx.lineTo(600,20+i*20);
			ctx.stroke();
		}

			var grad = ctx.createLinearGradient(20, 0, 480, 300); 
			grad.addColorStop(0, 'rgb('+(178-p)+','+(247-p)+','+(251-p)+')');  
		    grad.addColorStop(1, 'rgb('+(41-p/4)+','+(148-p/2)+','+(251-p)+')');  
			ctx.fillStyle = grad;  
		    ctx.fillRect(0, 0, 600, 480); 
		    ctx.fill();



		   ctx.beginPath(); //поле
		    var grad = ctx.createLinearGradient(0, 800, 0, 500);
			grad.addColorStop(0, '#FFC961');  
		    grad.addColorStop(1/2, '#BEF574');  
		    grad.addColorStop(1, '#FFFF66');  
			ctx.fillStyle = grad;  
		    ctx.fillRect(0, 500, 600, 300);

		    ctx.beginPath(); //дорога у дома
		    var grad = ctx.createLinearGradient(0, 500, 0, 480);
			grad.addColorStop(0, '#DBDBDB');  
		    grad.addColorStop(1, '#BDBDBD');  
			ctx.fillStyle = grad;  
		    ctx.fillRect(0, 480, 600, 20);

            ctx.beginPath();  //т. елки
		    ctx.fillStyle = "rgb(54,99,55)";  
            ctx.moveTo(140,480);
            ctx.lineTo(140,160);
            ctx.lineTo(200,480);
            ctx.fill();

            ctx.beginPath(); //круглая елка
		    ctx.arc(540, 400, 80, 0, Math.PI*2, true);
		    ctx.fillStyle = "rgb(54,99,55)";  
	    	ctx.fill();

            ctx.beginPath(); //стена
            ctx.fillStyle = "rgb(250,250,250)";
		    ctx.fillRect(240,320,80,160);	 
		    ctx.fillStyle = "rgb(205,205,205)";
		    ctx.fillRect(320,320,80,160);
		    ctx.fillStyle = "rgb(205,205,205)";
		    ctx.fillRect(400,420,180,60);
		    ctx.fillStyle = "rgb(250,250,250)";
		    ctx.fillRect(140,400,100,80);	 

            ctx.beginPath(); //окошки и дверь
		    ctx.fillStyle = "rgb(86,63,31)";
		    ctx.fillRect(280,340,20,40);
		    ctx.fillStyle = "rgb(86,63,31)";
		    ctx.fillRect(260,420,40,60);
		    ctx.fillStyle = "rgb(86,63,31)";
		    ctx.fillRect(360,340,20,40);
		    ctx.fillStyle = "rgb(86,63,31)";
		    ctx.fillRect(500,440,10,20);
		    ctx.fillStyle = "rgb(86,63,31)";
		    ctx.fillRect(540,440,10,20);
		    ctx.fillStyle = "rgb(86,63,31)";
		    ctx.fillRect(160,420,10,20);
		    ctx.fillStyle = "rgb(86,63,31)";
		    ctx.fillRect(200,420,10,20);

		    ctx.beginPath(); //газон у дома
		    var grad = ctx.createLinearGradient(400, 470, 400, 480);
			grad.addColorStop(0, 'green');  
		    grad.addColorStop(1, '#363636');  
			ctx.fillStyle = grad;  
		    ctx.fillRect(400, 470, 180, 10); 

		    ctx.beginPath(); //крыша
		    ctx.fillStyle = "rgb(220,57,19)";
            ctx.moveTo(240,320);
            ctx.lineTo(320,240);
            ctx.lineTo(320,320);
            ctx.fill();

            ctx.beginPath(); 
		    ctx.fillStyle = "rgb(173,46,14)";
            ctx.moveTo(320,240);
            ctx.lineTo(400,320);
            ctx.lineTo(320,320);
            ctx.fill();

            ctx.fillStyle = "rgb(220,57,19)";
		    ctx.fillRect(400,360,160,60);	 

            ctx.beginPath(); //крыша
		    ctx.fillStyle = "rgb(173,46,14)";
            ctx.moveTo(400,420);
            ctx.lineTo(400,360);
            ctx.lineTo(480,360);
            ctx.fill();

            ctx.beginPath(); 
		    ctx.fillStyle = "rgb(220,57,19)";
            ctx.moveTo(560,360);
            ctx.lineTo(580,420);
            ctx.lineTo(560,420);
            ctx.fill();

            ctx.fillStyle = "rgb(220,57,19)";
		    ctx.fillRect(160,340,80,60);	

            ctx.beginPath(); 
		    ctx.fillStyle = "rgb(220,57,19)";
            ctx.moveTo(140,400);
            ctx.lineTo(160,340);
            ctx.lineTo(160,400);
            ctx.fill();


            ctx.beginPath();  //св. елки
		    ctx.fillStyle = "rgb(67,152,70)";  
            ctx.moveTo(80,480);
            ctx.lineTo(140,160);
            ctx.lineTo(140,480);
            ctx.fill();

            ctx.beginPath();  // св. елки
		    ctx.fillStyle = "rgb(67,152,70)";  
            ctx.moveTo(40,480);
            ctx.lineTo(80,120);
            ctx.lineTo(80,480);
            ctx.fill();


            ctx.beginPath();  //т. елки
		    ctx.fillStyle = "rgb(54,99,55)";  
            ctx.moveTo(80,480);
            ctx.lineTo(80,120);
            ctx.lineTo(120,480);
            ctx.fill();


	 			for(var i = 0; i<100; i++){
            	var x = Math.random() * (600);
				var y = Math.random() * (600);
    			ctx.beginPath();
    			ctx.fillStyle = 'rgba(255,255,255,0.5)';
    			ctx.arc(x,y,6,0,Math.PI*2,true);
    			ctx.fill();
    		}


        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.moveTo(0,600-p*1.5);
        ctx.lineTo(50,590-p*1.5);
        ctx.lineTo(150,600-p*1.5);
        ctx.lineTo(300,590-p*1.5);
        ctx.lineTo(500,600-p*1.5);
        ctx.lineTo(600,600-p*1.5);
        ctx.lineTo(600,600);
        ctx.lineTo(0,600);
        ctx.fill();

	},100)
}
	 		
function arcs(ctx,x,y,r) {
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.fill();

}
/*
function snow(ctx){

    ctx.beginPath();
    var radgrad4 = ctx.createRadialGradient(x,y+10,3,x,y+10,6);
    radgrad4.addColorStop(0, 'rgba(255,255,255,0,4)');
    radgrad4.addColorStop(0.5, 'rgba(255,255,255,0,4)');
    radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
    ctx.fillStyle = radgrad4;
    ctx.fillRect(0,0,600,600);
}*/