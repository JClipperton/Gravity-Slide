var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ship = (function (_super) {
        __extends(Ship, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function Ship(game, player, x, y, width, spriteString, speed) {
            _super.call(this, game, x, y, spriteString);
            this.game = game;
            this._player = player;
            this.x = x;
            this.width = width;
            this._speed = (speed * 2);
            // assign audio
            // set up animation
            this.loadTexture('ship');
            this.animations.add('go', [0, 1], 10, true);
            this.animations.play('go');
            this._arrow = this.game.add.image(700, y, 'arrow');
            this._arrow.scale.setTo(-0.5, 0.5);
            this.game.time.events.add(Phaser.Timer.HALF, this._fadeArrow, this);
            // enable physics
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.body.immovable = true;
            this.body.mass = 5;
        }
        /** Update Method for Ship Class */
        Ship.prototype.update = function () {
            // moves ship left
            this.x -= 15;
            // kills/marks offscreen ship for cleanup
            if (this.x == 0 - this.width) {
                this.kill();
            }
            if (this.game.physics.arcade.collide(this._player, this)) {
                console.log("HIT");
                this._player.body.velocity.x += 500;
            }
        };
        // PRIVATE METHODS +++++++++++++++++++	
        Ship.prototype._fadeArrow = function () {
            this.game.add.tween(this._arrow).to({ alpha: 0 }, 250, Phaser.Easing.Linear.None, true);
        };
        return Ship;
    })(Phaser.Sprite);
    objects.Ship = Ship;
})(objects || (objects = {}));
//# sourceMappingURL=ship.js.map