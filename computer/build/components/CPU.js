"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPU = void 0;
class CPU {
    constructor(name, segment, lithography, numOfCores, numOfThreads, baseFrequency, turboBoost, cache, TDP, maxMemorySize, memoryTypes, maxMemoryChannels, PCIeVersion, socket, tJunction) {
        this.name = name;
        this.segment = segment;
        this.lithography = lithography;
        this.numOfCores = numOfCores;
        this.numOfThreads = numOfThreads;
        this.baseFrequency = baseFrequency;
        this.turboBoost = turboBoost;
        this.cache = cache;
        this.TDP = TDP;
        this.maxMemorySize = maxMemorySize;
        this.memoryTypes = memoryTypes;
        this.maxMemoryChannels = maxMemoryChannels;
        this.PCIeVersion = PCIeVersion;
        this.socket = socket;
        this.tJunction = tJunction;
    }
}
exports.CPU = CPU;
