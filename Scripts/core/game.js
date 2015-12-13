/// <reference path = "_reference.ts"/>
var Game;
(function (Game) {
    // GRAVITY SLIDE CLASS 
    var GravitySlide = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function GravitySlide() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
        // load all game assets
        GravitySlide.prototype.preload = function () {
            this.game.load.image('preload-bar', '../Assets/images/loader.png');
        };
        GravitySlide.prototype.create = function () {
            // game settings
            this.game.input.maxPointers = 1; // increase for multi-touch support
            this.game.stage.disableVisibilityChange = true; // pause the game on loss of focus
            this.game.scale.pageAlignHorizontally = true;
            if (this.game.device.desktop) {
                // Any desktop targeted settings go here
                // set scaling
                this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE; // default to NO_SCALE, SHOW_ALL is also good on some screens 
                this.game.scale.minWidth = 640;
                this.game.scale.minHeight = 480;
                this.game.scale.maxWidth = 1600;
                this.game.scale.maxHeight = 1200;
            }
            else {
                // Any mobile targeted settings go here
                // set scaling
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.game.scale.minWidth = 480;
                this.game.scale.minHeight = 260;
                this.game.scale.maxWidth = 1024;
                this.game.scale.maxHeight = 768;
                this.game.scale.forceLandscape = true;
                this.game.scale.refresh();
            }
            // load game states
            this.game.state.add("Title", scenes.Title, true);
            this.game.state.add("Play", scenes.Play, false);
            this.game.state.add("Over", scenes.Over, false);
        };
        return GravitySlide;
    })();
    Game.GravitySlide = GravitySlide;
    window.onload = function () {
        var game = new Game.GravitySlide(); // loads game instance
    };
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map