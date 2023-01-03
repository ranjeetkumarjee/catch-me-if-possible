var box = document.getElementById("box");
// var cont=document.getElementById('container');
// var pos=['a','b','c','d'];
// var rand=[3,1,0,2,1,3,2,0,1,3,0,2];

/*
console.log("helo");
var precls;
box.addEventListener('mouseover',function(){
     console.log("onmouseover fire");
     box.classList.remove(precls);
     var cls=pos[Math.floor(Math.random()*4)];
     box.classList.add(cls);
     precls=cls;
     
})

*/
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

// update viewWidth and viewHeight
window.addEventListener("resize", function (event) {
  viewWidth = this.window.innerWidth;
  viewHeight = this.window.innerHeight;
});

box.addEventListener("mouseover", function () {
  var boxAttribute = box.getBoundingClientRect();

  var newPos = genereteNewPos(boxAttribute.width, boxAttribute.height);

  box.style.top = newPos.y + "px";
  box.style.left = newPos.x + "px";
});

function genereteNewPos(boxwidth, boxheight) {
  var newX = Math.floor(Math.random() * viewWidth + 1 - boxwidth);
  var newY = Math.floor(Math.random() * viewHeight + 1 - boxheight);

  if (newX < 0) {
    newX = 0;
  }

  if (newY < 0) {
    newY = 0;
  }

  return { x: newX, y: newY };
}
