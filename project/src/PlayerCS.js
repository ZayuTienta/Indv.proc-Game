var PlayerCS = cc.Sprite.extend({
  ctor: function() {
        this._super();
        this.initWithFile( 'images/caN.png' );   
        this.dir = Player.DIR.DOWN;
        this.state= Player.STATE.MINE;
        this.isWalk=Player.WALK.OFF;
        this.hp=4;
    },
    hpSet: function (get){
        this.hp=get;
    },
    
    onBtn: function( x ){
    if(x==1){
    	this.initWithFile( 'images/caH.png' );   
        
    }
    else if(x==3){
    	this.initWithFile( 'images/caR.png' );


    }
    else if(x==2){
    	this.initWithFile( 'images/caL.png' );   
    }

    }, 
    updHp:function(){
        return this.hp;
    },

    wasHit: function(  ){
         
        this.initWithFile( 'images/caWH.png' );   
        this.Hp -=1;
    },

    update: function(){
        this.initWithFile( 'images/caN.png' ); 

    },
    

});
    

