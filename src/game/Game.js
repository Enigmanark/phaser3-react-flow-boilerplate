import * as Phaser from "phaser";
import BootScene from "../game/scenes/BootScene";
import MenuScene from "../game/scenes/MenuScene";
import PlayScene from "../game/scenes/PlayScene";

const config = {
    type: Phaser.AUTO,
    parent: "phaserContainer",
    width: 800,
    height: 600,
    pixelArt: true,
    scene: [BootScene, MenuScene, PlayScene],
}

export default class Game extends Phaser.Game {
    constructor() {
        super(config);
    }
}