var GameLayer = cc.LayerColor.extend({
     init: function() {
        this._super( new cc.Color4B( 255, 255,255, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        
        this.bgMine=cc.Sprite.create('images/MineCirc.png');
        this.bgMine.setPosition(new cc.Point(743/2,573/ 2));
        this.addChild(this.bgMine,1);
        this.mine=new Mine();
        this.mine.setPosition(new cc.Point(0,0));
        this.addChild(this.mine);
        this.mine.scheduleUpdate();

        this.player = new Player();
        this.player.setPosition(new cc.Point(746/2,596/ 2));
        this.addChild( this.player ,1);
        this.player.scheduleUpdate();
        
 
    return true;
    }
    ,
    onKeyDown: function( e ) {
        this.player.onKeyDown(e);
    
        this.mine.onKeyDown(e);

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

