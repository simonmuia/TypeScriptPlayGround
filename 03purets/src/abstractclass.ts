abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSerpia(): void;
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); //super is used to call constructor of the parent class
  }

  getSerpia(): void {
    console.log("Serpia");
  }
}

const sm = new Instagram("Test","test",3)

sm.getReelTime()
