"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); //super is used to call constructor of the parent class
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSerpia() {
        console.log("Serpia");
    }
}
const sm = new Instagram("Test", "test", 3);
sm.getReelTime();
