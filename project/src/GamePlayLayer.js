var GamePlayLayer = cc.LayerColor.extend({
     init: function() {
        this._super( new cc.Color4B( 255, 255,255, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.currentHP=4;
        this.monArrL=[];
        this.monArrR=[];
        this.playerCs = new PlayerCS();
        this.playerCs.setPosition(new cc.Point(746/2,596/ 2));
        this.addChild( this.playerCs ,1);
        this.playerCs.scheduleUpdate();
        playerCs.hpSet=this.currentHP;
        this.stone=new Stone(4);
        this.stone.setPosition(new cc.Point(746/2,596/2));
        this.addChild (this.stone,0);
 
    return true;
    }
    ,
    hitC:function(){
        this.stone.hit();
    },
    hitL:function(){
        for (var i = monArrL.length - 1; i >= 0; i--) {
            monArrL[i].hit();
        };
    },
    hitR:function(){
        for (var i = monArrR.length - 1; i >= 0; i--) {
            monArrR[i].hit();
        };
    },

    onKeyDown: function( e ) {
        if(e==cc.KEY.left){
            this.playerCs.onBtn(2);
            hitL();
        }  
        else if(e==cc.KEY.right){
            this.playerCs.onBtn(3);
            hitR();
        }
        else if(e==cc.KEY.up){
            this.playerCs.onBtn(1);
            hitC();
        }
        else if(e==cc.KEY.space){
        
        }

    },

    update: function() {
        this.currentHP=this.playerCs.updHP();
        this.playerCs.update();
    }

});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GamePlayLayer();
        layer.init();
        this.addChild( layer );


    }


});
GamePlayLayer.LEVEL={
    IRON=1;
    BRONZ=2;
    SILVER=3;
    CRYSTAL=4;
}

