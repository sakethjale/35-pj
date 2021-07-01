var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
  var db=database.ref('ball/position');
db.on("value",dataread,showerror)
}
function dataread(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;
}
function showerror(){
    console.log("error")
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(+1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(myx,myy){

    database.ref('ball/position').set({
        x:position.x+myx,
        y:position.y+myy
    })
  
    // ball.x = ball.x + x;
    // ball.y = ball.y + y;
}
