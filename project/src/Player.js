var Player = cc.Sprite.extend({
  ctor: function() {
        this._super();

        this.initWithFile( 'images/inta1.png' );   
        this.dir = Player.DIR.DOWN;
        this.state= Player.STATE.MINE;
        this.isWalk=Player.WALK.OFF;
        var animation1x = new cc.Animation.create();
        animation1x.addSpriteFrameWithFile( 'images/inta1.png' );
        animation1x.setDelayPerUnit( 0.3 );
        this.movingAction1x = cc.Animate.create( animation1x );
        var animation3x = new cc.Animation.create();
        animation3x.addSpriteFrameWithFile( 'images/inta3.png' );
        animation3x.setDelayPerUnit( 0.3 );
        this.movingAction3x = cc.Animate.create( animation3x );
        var animation1 = new cc.Animation.create();
		animation1.addSpriteFrameWithFile( 'images/inta1a.png' );
		animation1.addSpriteFrameWithFile( 'images/inta1b.png' );
       // animation1.addSpriteFrameWithFile( 'images/inta1.png' );
		animation1.setDelayPerUnit( 0.4);
        this.movingAction1 = cc.Animate.create( animation1 );
        var animation3 = new cc.Animation.create();
        animation3.addSpriteFrameWithFile( 'images/inta3a.png' );
        animation3.addSpriteFrameWithFile( 'images/inta3b.png' );
      //  animation3.addSpriteFrameWithFile( 'images/inta3.png' );
        animation3.setDelayPerUnit( 0.4 );
        this.movingAction3 = cc.Animate.create( animation3 );
        this.pressing=Player.PRESS.OFF;
        
    },
 
    
    setDirection: function( x ){
    if(x==3){
    	this.dir= Player.DIR.UP ;
    }
    else if(x==2){
    	this.dir= Player.DIR.RIGHT ;
    }
    else if(x==1){
    	this.dir= Player.DIR.DOWN ;
    }
    else if(x==4){
    	this.dir= Player.DIR.LEFT ;
    }

    }, 
    anima: function(  ){
         
        this.isWalk=Player.WALK.ON;
             
    	if(this.dir==Player.DIR.DOWN){
    		this.runAction( this.movingAction1 );
            
    	}
    	else if(this.dir==Player.DIR.RIGHT){
    		this.runAction( this.movingAction3 );
            
    	}
    	else if(this.dir==Player.DIR.UP){
    		this.runAction( this.movingAction3 );
            
    	}
    	else if(this.dir==Player.DIR.LEFT){
    		this.runAction( this.movingAction1 );
            
    	}
    this.scheduleOnce(function(){
            this.isWalk=Player.WALK.OFF;
        }, 0.8);
     
    

       
    },
    stand: function(){
        if(this.dir==Player.DIR.DOWN){
            this.initWithFile( 'images/inta1.png' );   
        }
        if(this.dir==Player.DIR.RIGHT){
            this.initWithFile( 'images/inta3.png' );   
        }
        if(this.dir==Player.DIR.UP){
            this.initWithFile( 'images/inta3.png' );   
        }
        if(this.dir==Player.DIR.LEFT){
            this.initWithFile( 'images/inta1.png' );   
        }


    },
     
    
    onKeyDown: function( e ) {
       console.log("pressing");
    if(this.isWalk == Player.WALK.OFF){
        this.pressing=Player.PRESS.ON;
        console.log("xxxxx");
        if(e==cc.KEY.left){

            this.setDirection(4);
            this.anima();
            
            console.log("4");
        }
            
        else if(e==cc.KEY.right){
            this.setDirection(2);
            this.anima();
            
            console.log("2");
            }
        else if(e==cc.KEY.up){
        console.log("33");
            this.setDirection(3);
            this.anima();
            
            console.log("3");
            }
        else if(e==cc.KEY.down){
            this.setDirection(1);
            this.anima();
            
            console.log("1");
            }
        else if(e==cc.KEY.space){
            console.log("ssss");
            }
            
        }
        
    },
    onKeyUp: function(e) {
      this.pressing=Player.PRESS.OFF;
      console.log("uuu");
    },
    update: function(){
        if(this.pressing==Player.PRESS.OFF && this.isWalk==Player.WALK.OFF){
            this.stand();
        }
    },
    

});
Player.STATE = {
	MINE: 2,
	NORMAL: 1,
	TALK: 3,
	DIG: 4,
};
Player.DIR = {
	UP: 3,
    RIGHT: 2,
    DOWN: 1,
    LEFT: 4,

};
Player.WALK = {
    OFF: 1,
    ON: 2,
};
Player.PRESS ={
    OFF: 1,
    ON: 2,
}

