abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
        
        ){}
}

class Instagram extends TakePhoto{

}

// const sm = new TakePhoto("Test","test")