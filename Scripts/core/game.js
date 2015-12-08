/// <reference path = "_reference.ts"/>
var Game;
(function (Game) {
    var GravitySlide = (function () {
        function GravitySlide() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
        // load all game assets
        GravitySlide.prototype.preload = function () {
            // graphics go here
            this.game.load.image('logo', '../Assets/images/Phaser-Logo-Small.png');
            this.game.load.image('sky', '../Assets/images/sky.png');
            this.game.load.image('platform', '../Assets/images/platform.png');
            this.game.load.image('platform2', '../Assets/images/platform2.png');
            this.game.load.image('star', '../Assets/images/star.png');
            this.game.load.image('gem', '../Assets/images/diamond.png');
            this.game.load.image('firstaid', '../Assets/images/firstaid.png');
            // spritesheets go here
            this.game.load.spritesheet('dude', '../Assets/images/dude.png', 32, 48);
            this.game.load.spritesheet('baddie', '../Assets/images/baddie.png', 32, 48);
            // audio goes here
            this.game.load.audio('gameover', '../Assets/audio/badEnd.wav');
        };
        GravitySlide.prototype.create = function () {
            // load game states
            this.game.state.add("Title", scenes.Title, true);
            this.game.state.add("Play", scenes.Play, false);
            this.game.state.add("Over", scenes.Over, false);
            // set scaling
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE; // default to NO_SCALE, SHOW_ALL is also good on some screens
        };
        return GravitySlide;
    })();
    Game.GravitySlide = GravitySlide;
    window.onload = function () {
        var game = new Game.GravitySlide(); // loads game instance
    };
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map