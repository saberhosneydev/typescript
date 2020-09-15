class CPU {
    constructor(public name: string, public segment: string, public lithography: string,
                public numOfCores: number, public numOfThreads: number, public baseFrequency: number, public turboBoost: number,
                public cache: number[], public TDP: number, public maxMemorySize: number, public memoryTypes: [type: string, speed: number],
                public maxMemoryChannels: number, public PCIeVersion: number, public socket: number, public tJunction: number) {
    }
}
export { CPU };