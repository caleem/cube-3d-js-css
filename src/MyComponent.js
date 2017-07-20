import $ from 'jquery';

export default class {
  constructor() {
 
    this.initEvent();
  }

  initEvent() { 
    $('.front').on('click', () => {
        $('.cube').addClass('cube2');
    });
    $('.right').on('click', () => {
        $('.cube').addClass('cube2');
    });
    $('.back').on('click', () => {
        $('.cube').addClass('cube2');
    });
    $('.left').on('click', () => {
        $('.cube').addClass('cube2');
    });

    $('.cube').on("webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function() {
        
         $('.cube').removeClass('cube2');
        var frontElement = $('.front') 
        var rightElement = $('.right')
        var backElement = $('.back')
        var leftElement = $('.left')
      
       frontElement.removeClass('front').addClass('right');
        rightElement.removeClass('right').addClass('back');
        backElement.removeClass('back').addClass('left');
        leftElement.removeClass('left').addClass('front');
      }
    ); 
  }
};