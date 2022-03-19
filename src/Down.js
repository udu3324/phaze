import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowLeft, faCircleArrowRight, faCircleArrowUp, faMeteor, faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { movePlayer } from "./Tool";
import { gameMaze } from ".";
import { defaultNumberOfPhazes, togglePhaze } from "./Phaze";
import { defaultNumberOfQuakes, toggleQuake } from "./Quake";

class Down extends React.Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.phaze = this.phaze.bind(this);
        this.quake = this.quake.bind(this);
    }

    up() {
        movePlayer(gameMaze, "up")
    }

    down() {
        movePlayer(gameMaze, "down")
    }

    left() {
        movePlayer(gameMaze, "left")
    }

    right() {
        movePlayer(gameMaze, "right")
    }

    phaze() {
        togglePhaze()
    }

    quake() {
        toggleQuake()
    }

    render() {
        return <div className="down-div">
            <div id="down">
                <button onClick={this.up} aria-label="up" id="up-btn" className="down-btn" type="button"><FontAwesomeIcon icon={faCircleArrowUp} /></button>
            </div>
            <div id="down">
                <button onClick={this.down} aria-label="down" id="down-btn" className="down-btn" type="button"><FontAwesomeIcon icon={faCircleArrowDown} /></button>
            </div>
            <div id="down">
                <button onClick={this.quake} id="quake-btn" className="down-btn" type="button"><FontAwesomeIcon icon={faMeteor} /><u>Q</u>uake({defaultNumberOfQuakes})</button>
            </div>
            <div id="down">
                <button onClick={this.phaze} id="phaze-btn" className="down-btn" type="button"><FontAwesomeIcon icon={faPersonRunning} />Phaz<u>e</u>({defaultNumberOfPhazes})</button>
            </div>
            <div id="down">
                <button onClick={this.left} aria-label="left" id="left-btn" className="down-btn" type="button"><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
            </div>
            <div id="down">
                <button onClick={this.right} aria-label="right" id="right-btn" className="down-btn" type="button"><FontAwesomeIcon icon={faCircleArrowRight} /></button>
            </div>
        </div>;
    }
}

export default Down;