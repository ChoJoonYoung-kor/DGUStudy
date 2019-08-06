window.onload = function(){ 
    var test = document.querySelector('.spinbox').childNodes;
    var ibx, upBtn, downBtn;

    for(var i = 0; i < test.length; i++){
        if(test[i].dataset){
            if(test[i].dataset.boxType === 'input'){
                ibx = test[i];
            }
            if(test[i].dataset.buttonType === 'up'){
                upBtn = test[i];
            }
            if(test[i].dataset.buttonType === 'down'){
                downBtn = test[i];
            }
        }
    }

    ibx.addEventListener("blur",
        function(e){
            alert("좋은말로할때 문자는 지워라");
            //for(var i = 0; i < ibx.value.length; i++)
        }
    );
    
    upBtn.addEventListener("mousedown",
        function(e){
            ibx.value = ibx.value * 1 + 1;
            var itv = setInterval(
                function(){
                    ibx.value = ibx.value * 1 + 1
                }, 500);
            this.addEventListener("mouseup",
                function(e){
                    clearInterval(itv);
                }
            );
        }   
    );

    downBtn.addEventListener("mousedown",
        function(e){
            ibx.value = ibx.value * 1 - 1;
            var itv = setInterval(
                function(){
                    ibx.value = ibx.value * 1 - 1
                }, 500);
            this.addEventListener("mouseup",
                function(e){
                    clearInterval(itv);
                }
            );
        }   
    );
}
