import * as Phaser from "phaser"
import React from "react"
import UI from "../ui/ui";
import HelloWorld from "../ui/components/helloworld";
import Button from "../ui/components/button";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    create() {
        this.helloWorld = UI.toggleModal( {
            id: "HelloWorld",
            Component: HelloWorld,
            InitialProps: {
                playerName : "PlayerName"
            }
        });

        this.button = UI.toggleModal( {
            id: "Button",
            Component: Button,
        });

        this.button.on("startGame", () => {
            UI.toggleModal({ id: "HelloWorld" });
            UI.toggleModal({ id: "Button" });
            this.scene.start("PlayScene");
        });
    }
}