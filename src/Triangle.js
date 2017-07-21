import $ from 'jquery';

export default class {
  constructor(containerElementId) {
 
    //var subContainer = document.createElement("DIV");
    
    //$('#'+containerElementId).append(subContainer)

    this.initEvent();
  }

  initEvent() { 

     $('.ttop').click(function(e){
      console.log(e.offsetX + ' , ' +e.offsetY + ' = '+ (e.offsetX  +e.offsetY));

      // need to figure out user is clicking top, bottom, left or right 
      if(e.offsetX <$(this).outerHeight() - 4){
       
      }
    });
  }



};