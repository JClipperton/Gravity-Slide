var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    (function (PlayerState) {
        PlayerState[PlayerState["IDLE"] = 0] = "IDLE";
        PlayerState[PlayerState["RUNNING"] = 1] = "RUNNING";
        PlayerState[PlayerState["JUMPING"] = 2] = "JUMPING";
    })(objects.PlayerState || (objects.PlayerState = {}));
    var PlayerState = objects.PlayerState;
    var Player = (function (_super) {
        __extends(Player, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function Player(game, x, y, spriteString, bounce, gravity) {
            _super.call(this, game, x, y, spriteString);
            // set registration point to the center of the objects
            this.anchor.setTo(0.5, 0.5);
            this.game.physics.arcade.enable(this);
            this._bounce = bounce; // bounciness of the player
            this._gravity = gravity; // pull of gravity on the player			
            // enable keyboard input
            this._input = this.game.input.keyboard.createCursorKeys();
        }
        /**
         * Update Method for Player Class
        */
        Player.prototype.update = function () {
            // update inputs
            this.body.velocity.x = 0;
            if (this._input.left.isDown) {
                //  Move to the left
                this.body.velocity.x = -150;
                this.animations.play('left');
                this._playerState = PlayerState.RUNNING;
            }
            else if (this._input.right.isDown) {
                //  Move to the right
                this.body.velocity.x = 150;
                this.animations.play('right');
                this._playerState = PlayerState.RUNNING;
            }
            else {
                //  Stand still
                this.animations.stop();
                this.frame = 4;
                this._playerState = PlayerState.IDLE;
            }
            //  Allow the player to jump if they are touching the ground
            if (this._input.down.isDown && this.body.touching.up) {
                this.body.velocity.y = 350;
                this._playerState = PlayerState.JUMPING;
            }
            // update gravity
        };
        return Player;
    })(Phaser.Sprite);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map