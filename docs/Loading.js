window.indicator={loading:void 0,style:void 0,setStyle:function(a){a&&a&&a.radius&&a.weight&&a.color&&(this.style=a,this.loader&&this.exec())},exec:function(){this.style?(loader.style.border=this.style.weight+"px solid "+this.style.color,loader.style.width=loader.style.height=this.style.radius+"px",loader.style.top=loader.style.left="-"+(this.style.weight+this.style.radius>>1)+"px"):(loader.style.border="3px solid #F55566",loader.style.width=loader.style.height="100px",loader.style.left="-51px",loader.style.top="-51px"),loader.style.borderRightColor="transparent"},start:function(){if(this.timerID&&(clearInterval(this.timerID),document.getElementById("loaderContainer")&&document.body.removeChild(window.indicator.loading)),window.addEventListener&&void 0==document.getElementById("loaderContainer")){this.loading=document.createElement("div"),this.loading.id="loaderContainer";var a=document.createElement("div");a.id="loader",this.loading.appendChild(a),document.body.appendChild(this.loading),this.exec()}},stop:function(){this.loading&&(this.loading.style.opacity=0,this.loading.style.filter="alpha(opacity=100)",this.timerID=setTimeout(function(){document.getElementById("loaderContainer")&&document.body.removeChild(window.indicator.loading),this.timerID=void 0},300))}},window.indicator.start();