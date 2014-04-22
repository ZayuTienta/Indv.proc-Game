var PlayerCS = cc.Sprite.extend({
  ctor: function() {
        this._super();
        this.initWithFile( 'images/caN.png' );   
        this.dir = Player.DIR.DOWN;
        this.state= Player.STATE.MINE;
        this.isWalk=Player.WALK.OFF;

        var animationNormal = new cc.Animation.create();
        animationNormal.addSpriteFrameWithFile( 'images/caN1.png' );
        animationNormal.addSpriteFrameWithFile( 'images/caN2.png' );
        animationNormal.setDelayPerUnit( 0.1 );
        this.movingActionNormal = cc.Animate.create( animationNormal );

        var animationLeft = new cc.Animation.create();
        animationLeft.addSpriteFrameWithFile( 'images/caL1.png' );
        animationLeft.addSpriteFrameWithFile( 'images/caL1.png' );
        animationLeft.setDelayPerUnit( 0.1 );
        this.movingActionLeft = cc.Animate.create( animationLeft );

        var animationRight = new cc.Animation.create();
		animationRight.addSpriteFrameWithFile( 'images/caR1.png' );
		animationRight.addSpriteFrameWithFile( 'images/caR2.png' );
       // animation1.addSpriteFrameWithFile( 'images/inta1.png' );
		animation1.setDelayPerUnit( 0.1);
        this.movingActionRight = cc.Animate.create( animationRight );
        
        var animationHit = new cc.Animation.create();
        animationHit.addSpriteFrameWithFile( 'images/caH1.png' );
        animationHit.addSpriteFrameWithFile( 'images/caH2.png' );
        animation3.setDelayPerUnit( 0.1 );
        this.movingAction3 = cc.Animate.create( animationHit );
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
    

