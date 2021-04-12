var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";
function player_update()
{
    fabric.Image.fromURL("https://pngbas.com/images/bt/baby-groot-clipart-3.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });

}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,left:player_x});
            canvas.add(block_image_object);
            
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=='80')
    {
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keyPressed=='77')
    {
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=="38")
    {
        up();
        console.log("up");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }

    if(keyPressed=='87')
    {
        new_image('https://www.redwolf.in/image/catalog/artwork-Images/mens/spiderman-logo-design.png');
        console.log("w");
    }

    if(keyPressed=='71')
    {
        new_image('https://image.freepik.com/free-vector/green-goblin-sport-logo_1780-6.jpg');
        console.log("g");
    }
    
    if(keyPressed=='108')
    {
        new_image('https://img-new.cgtrader.com/items/1903427/945478f369/logo-hulk-3d-3d-model-fbx.jpg');
        console.log("l");
    }

    if(keyPressed=='84')
    {
        new_image('https://img-new.cgtrader.com/items/1903427/945478f369/logo-hulk-3d-3d-model-fbx.jpg');
        console.log("t");
    }
    if(keyPressed=='82')
    {
        new_image('https://img.pngio.com/thors-hammer-icon-311850-free-icons-library-thor-hammer-logo-png-512_512.jpg');
        console.log("r");
    }

    if(keyPressed=='89')
    {
        new_image('https://tse3.mm.bing.net/th?id=OIP.sRwAeIbHmCH6NIqRQP7pLwHaHa&pid=Api&P=0&w=300&h=300');
        console.log("y");
    }

    if(keyPressed=='68')
    {
        new_image('https://c.wallhere.com/photos/f6/a4/superhero_Marvel_Heroes_DC_Comics_The_Vision-41659.png!d');
        console.log("d");
    }

    if(keyPressed=='85')
    {
        new_image('http://wallpapercave.com/wp/wp1927064.jpg');
        console.log("u");
    }

    if(keyPressed=='67')
    {
        new_image('http://getwallpapers.com/wallpaper/full/4/c/f/560124.jpg');
        console.log("c");
    }
}
function up()
{
    if(player_y >=0)
    {
        player_y=player_y-block_image_height;
        console.log("block_image_height"+block_image_height);
        console.log("when up arrow is presed,x="+player_x+ " ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
function down()
{
    if(player_y <=500)
    {
        player_y=player_y+block_image_height;
        console.log("block_image_height"+block_image_height);
        console.log("when down arrow is presed,x="+player_x+ " ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
function left()
{
    if(player_x >=0)
    {
        player_x=player_x-block_image_width;
        console.log("block_image_height"+block_image_height);
        console.log("when left arrow is presed,x="+player_x+ " ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
function right()
{
    if(player_x <=850)
    {
        player_x=player_x+block_image_width;
        console.log("block_image_height"+block_image_height);
        console.log("when right arrow is presed,x="+player_x+ " ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    } 
}