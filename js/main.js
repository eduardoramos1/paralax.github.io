(function($){

    $('.paroller').paroller()


    var contentWaypoint = function(){
        $('.element-animate').waypoint( function( direction ){
            console.log(direction);
            console.log(this);
            console.log(this.element);

            if(direction === 'down' && !$(this.element).hasClass('element-animated')){
                $(this.element).removeClass('element-animate').addClass('element-animated fadeInUp')
            }
        }, {
            offset: '90%'
        });
    }

    contentWaypoint();
})(jQuery);