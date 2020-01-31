import * as Phaser from "phaser";

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super("PlayScene");
    }

    create() {
        console.log("started");
    }
}