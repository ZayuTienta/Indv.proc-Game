var Gold = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'images/coin.gif' );
    },
 
    randomPosition: function() {
        this.setPosition( new cc.Point( (Math.random()*700)+50, (Math.random()*500) +50 ) );
    },
    closeTo: function( obj ) {
	var myPos = this.getPosition();
	var oPos = obj.getPosition();
  	return ( ( Math.abs( myPos.x - oPos.x ) <= 30 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 30 ) );
    }
});