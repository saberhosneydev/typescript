import fs from "fs";

class Engine {
    constructor() {
    }
    /**
     * render
     */
    public render(path: string, options: Object) {
        let file = fs.readFileSync(path, { encoding: "utf8" });
        let gFile = file;
        // let resolver = new Promise<void>((resolve, reject) => {
        //     Object.entries(options).forEach(([key, value], index, array) => {
        //         let lFile = gFile.replace(key, value);
        //         gFile = lFile;
        //         if (index === array.length - 1) {
        //             resolve();
        //         }
        //     });
        // });
        // Promise-based handling. means the code will have to wait for the promise to finish before continue.
        Object.entries(options).forEach(([key, value]) => {
            let lFile = gFile.replace(new RegExp(`{{ ${key} }}`, "g"), value);
            gFile = lFile;
        });
        return gFile;
    }
}

export { Engine };