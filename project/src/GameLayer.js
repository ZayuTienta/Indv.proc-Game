var GameLayer = cc.LayerColor.extend({
     init: function() {
        this._super( new cc.Color4B( 255, 255,255, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.player = new Player();
        this.player.setPosition(new cc.Point(746/2,596/2));
        this.addChild( this.player );
        this.player.scheduleUpdate();
        
 
    return true;
    }
    ,
    onKeyDown: function( e ) {
    this.player.onKeyDown(e);
    

    },
    onKeyUp: function( e ) {
        this.player.onKeyUp(e);
        
    },
    update: function() {
        
    }

});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );


    }


});

