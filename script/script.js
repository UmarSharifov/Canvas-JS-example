function draw(x, y)
{
    var ctx = document.getElementById("canvas").getContext("2d");
    var grad = ctx.createLinearGradient(0,50,1000,1000);
    //задний фон
    grad.addColorStop(0, 'rgb(238, 100, 32)');
    grad.addColorStop(1/2,'rgb(246,162,44');
    grad.addColorStop(1,'rgb(237,91,30)');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,1000,1000);
    //солнце
    ctx.strokeStyle = 'rgb(255,250,226)';
    ctx.fillStyle = 'rgb(255, 250, 226)';
    arcs(ctx, 350 , 550, 100);
    //гора 3 слой

    ctx.beginPath();
    ctx.fillStyle = 'rgb(196,115,42)';
    ctx.moveTo(0,700);
    ctx.lineTo(50,690);
    ctx.lineTo(150,600);
    ctx.lineTo(300,690);
    ctx.lineTo(350,670);
    ctx.lineTo(400,670);
    ctx.lineTo(500,600);
    ctx.lineTo(600,700);
    ctx.lineTo(800,580);
    ctx.lineTo(850,600);
    ctx.lineTo(900,550);
    ctx.lineTo(1200,700);
    ctx.lineTo(1000,1000);
    ctx.lineTo(0,1000);
    ctx.fill();
    // гора 2 слой
    ctx.beginPath();
    ctx.fillStyle = 'rgb(132,63,28)';
    ctx.moveTo(0,650);
    ctx.lineTo(100,730);
    ctx.lineTo(300,650);
    ctx.lineTo(330,650);
    ctx.lineTo(400,600);
    ctx.lineTo(500,800);
    ctx.lineTo(600,700);
    ctx.lineTo(700,750);
    ctx.lineTo(800,700);
    ctx.lineTo(850,700);
    ctx.lineTo(900,650);
    ctx.lineTo(950,800);
    ctx.lineTo(1000,700);
    ctx.lineTo(1000,1000);
    ctx.lineTo(0,1000);
    ctx.fill();
    //гора 1 слой
    ctx.beginPath();
    ctx.fillStyle = 'rgb(50,50,50)';
    ctx.moveTo(0,800);
    ctx.lineTo(120,700);
    ctx.lineTo(200,720);
    ctx.lineTo(300,750);
    ctx.lineTo(350,750);
    ctx.lineTo(400,800);
    ctx.lineTo(450,720);
    ctx.lineTo(500,740);
    ctx.lineTo(550,720);
    ctx.lineTo(600,700);
    ctx.lineTo(700,800);
    ctx.lineTo(750,900);
    ctx.lineTo(800,800);
    ctx.lineTo(900,750);
    ctx.lineTo(1000,800);
    ctx.lineTo(1000,1000);
    ctx.lineTo(0,1000);
    ctx.fill();
    //травка 1
    ctx.beginPath();
    ctx.moveTo(200,730);
    ctx.quadraticCurveTo(190,700,196,680);
    ctx.moveTo(196,680);
    ctx.lineTo(190,720);
    ctx.moveTo(200,730);
    ctx.lineTo(170,680);
    ctx.lineTo(185,730);
    ctx.fill();
    //травка 2
    ctx.beginPath();
    ctx.moveTo(300,730);
    ctx.moveTo(496,680);
    ctx.lineTo(490,720);
    ctx.moveTo(500,750);
    ctx.lineTo(470,680);
    ctx.lineTo(485,750);
    ctx.lineTo(550,700);
    ctx.fill();

    //деревя
    ctx.lineWidth = "25";
    ctx.strokeStyle = 'rgb(50,50,50)';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(600,550);
    ctx.lineTo(600,800);
    ctx.lineTo(600,630);
    ctx.lineTo(560,630);
    ctx.lineTo(560,550);
    ctx.moveTo(600,600);
    ctx.lineTo(650,600);
    ctx.lineTo(650,530);
    ctx.stroke();

    ctx.lineWidth = "10";
    ctx.strokeStyle = 'rgb(196,115,42)';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(70,580);
    ctx.lineTo(70,680);
    ctx.moveTo(70,620);
    ctx.lineTo(50,620);
    ctx.lineTo(50,590);
    ctx.moveTo(70,640);
    ctx.lineTo(90,640);
    ctx.lineTo(90,600);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.moveTo(50,610);
    ctx.lineTo(35,610);
    ctx.lineTo(35,590);
    ctx.stroke();

    //облака
    ctx.lineWidth = "35";
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(150,100);
    ctx.lineTo(400,100);
    ctx.moveTo(250,130);
    ctx.lineTo(350,130);
    ctx.moveTo(800,65);
    ctx.lineTo(870,65);
    ctx.moveTo(750,100);
    ctx.lineTo(900,100);
    ctx.moveTo(850,135);
    ctx.lineTo(920,135);
    ctx.moveTo(880,400);
    ctx.lineTo(950,400);
    ctx.stroke();

    //birds
    ctx.lineWidth = '1';
    ctx.moveTo(600,300);
    ctx.quadraticCurveTo(690,270,690,290);
    ctx.moveTo(600,300);
    ctx.quadraticCurveTo(510,250,510,270);
    ctx.fill();





}
function arcs(ctx,x,y,r) {
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.fill();

}