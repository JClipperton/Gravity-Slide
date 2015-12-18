var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PICKUP CLASS
    var PickUp = (function (_super) {
        __extends(PickUp, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function PickUp(game, player, x, y, spriteString, speed) {
            _super.call(this, game, x, y, spriteString);
            this._speed = speed;
            this._player = player;
            this._active = true;
            // assign audio and value based on key
            if (this.key == 'pickupBlue') {
                this._pickupSound = new Phaser.Sound(this.game, 'pickupBlue', 1, false);
                this._value = 5;
            }
            else {
                this._pickupSound = new Phaser.Sound(this.game, 'pickupGrey', 1, false);
                this._value = 1;
            }
            // set up animation
            this.animations.add('animated', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
            this.animations.play('animated');
            // enable physics
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
        }
        /** Update Method for PickUp Class */
        PickUp.prototype.update = function () {
            // moves pick up left
            this.x -= this._speed;
            // kills offscreen platforms for cleanup
            if (this.x == 0 - this.width) {
                this.kill();
            }
            // check collisions
            if (this.game.physics.arcade.intersects(this._player.body, this.body)) {
                this._collectPickup();
            }
        };
        // PRIVATE METHODS
        /** deactivate and collect pickup */
        PickUp.prototype._collectPickup = function () {
            if (this._active) {
                this._pickupSound.play();
                this.alpha = 0;
                this.kill();
            }
            this._active = false;
        };
        return PickUp;
    })(Phaser.Sprite);
    objects.PickUp = PickUp;
})(objects || (objects = {}));
//# sourceMappingURL=pickup.js.map