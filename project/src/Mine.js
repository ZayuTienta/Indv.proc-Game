var Mine = cc.Node.extend({
    ctor: function() {
        this._super();
        this.bgMine=cc.Sprite.create('images/mineBG.png');
        this.bgMine.setPosition(new cc.Point(743/2,573/ 2));
        this.addChild(this.bgMine);
        this.xx=743/2;
        this.yy=573/2;
        this.WIDTH = 743;
        this.HEIGHT = 573;


        
        // ...  code for drawing the maze has be left out
 
    },


    onKeyDown: function( e ) {
       
    
       
        
        if(e==cc.KEY.left){

            this.xx+=20;
            this.bgMine.setPosition(new cc.Point(this.xx,this.yy));
        }
            
        else if(e==cc.KEY.right){
            this.xx-=20;
            this.bgMine.setPosition(new cc.Point(this.xx,this.yy));
            }
        else if(e==cc.KEY.up){
            this.yy-=10;
        this.bgMine.setPosition(new cc.Point(this.xx,this.yy));
            }
        else if(e==cc.KEY.down){
            this.yy+=10;
        this.bgMine.setPosition(new cc.Point(this.xx,this.yy));
            }
        
        
        
    },
});