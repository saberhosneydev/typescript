import {CPU} from './CPU';
import {RAM} from './RAM';
import {GPU} from './GPU';

class Motherboard {
    // Cpu
    cpuSocket: number
    chipset: string
    // Memory
    memorySlots: number
    memoryMax: number
    memoryType: string
    memorySpeed: number[]
    // Gpu
    multiGpuSupport: string[]
    // Expansion Slots
    PCIeSlotOne: [Revision: number, speed: number]
    PCIeSlotTwo: [Revision: number, speed: number]
    PCIeSlotThree: [Revision: number, speed: number]
    PCIeSlotsAllActiveRunningSpeed: number[]
    // Storage
    M2Slots: number
    SataSlots: number
    SataSpeed: number
    // Lan
    lanController: string
    lanSpeed: number
    secondLanController: string
    secondLanSpeed: number
    // Wireless
    wirelessController: string
    wirelessSpeed: number
    wirelessFrequency: number
    //Bluetooth
    bluetoothVersion: number
    // Audio
    audioController: string
    // Usb Ports
    usb32Ports: number
    usb31Ports: number
    usb30Ports: number
    usb20Ports: number
    //Onboard Connectors
    CPU: CPU
    GPU: GPU
    RAM: RAM


    //Variables
    availableMemory: number
    availableMemorySpeed: number


    constructor(cpuSocket: number, chipset: string, memorySlots: number, memoryMax: number,
                memorySpeed: number[], memoryType: string, multiGpuSupport: string[],
                PCIeSlotOne: [Revision: number, speed: number], PCIeSlotTwo: [Revision: number, speed: number], PCIeSlotThree: [Revision: number, speed: number], PCIeSlotsAllActiveRunningSpeed: number[], M2Slots: number, SataSlots: number, SataSpeed: number,
                lanController: string, lanSpeed: number, secondLanController: string, secondLanSpeed: number,
                wirelessController: string, wirelessSpeed: number, wirelessFrequency: number,
                bluetoothVersion: number, audioController: string,
                usb32Ports: number, usb31Ports: number, usb30Ports: number, usb20Ports: number) {
        this.cpuSocket = cpuSocket;
        this.chipset = chipset;
        this.memorySlots = memorySlots || 4;
        this.memoryMax = memoryMax || 32;
        this.memorySpeed = memorySpeed;
        this.memoryType = memoryType || "DDR4";
        this.multiGpuSupport = multiGpuSupport;
        this.PCIeSlotOne = PCIeSlotOne || [3.0, 16];
        this.PCIeSlotTwo = PCIeSlotTwo || [3.0, 16];
        this.PCIeSlotThree = PCIeSlotThree || [3.0, 4];
        this.PCIeSlotsAllActiveRunningSpeed = PCIeSlotsAllActiveRunningSpeed || [8, 8, 4];
        this.M2Slots = M2Slots || 1;
        this.SataSlots = SataSlots || 4;
        this.SataSpeed = SataSpeed || 6;
        this.lanController = lanController;
        this.lanSpeed = lanSpeed;
        this.secondLanController = secondLanController || undefined;
        this.secondLanSpeed = secondLanSpeed || undefined;
        this.wirelessController = wirelessController || undefined;
        this.wirelessSpeed = wirelessSpeed || undefined;
        this.wirelessFrequency = wirelessFrequency || undefined;
        this.bluetoothVersion = bluetoothVersion || undefined;
        this.audioController = audioController;
        this.usb32Ports = usb32Ports || 0;
        this.usb31Ports = usb31Ports || 0;
        this.usb30Ports = usb30Ports || 0;
        this.usb20Ports = usb20Ports || 2;
        this.CPU = undefined;
        this.GPU = undefined;
        this.RAM = undefined;
    }

    insertToConnector(ComponentConnector: string, Component: any) {
        switch (ComponentConnector) {
            case "CPU":
                // @ts-ignore
                if (this.cpuSocket === Component.socket && this.memoryType === Component.memoryTypes[0] && this.memorySpeed.includes(Component.memoryTypes[1])) {
                    this[ComponentConnector] = Component;
                    this.availableMemory = Component.maxMemorySize;
                    this.availableMemorySpeed = Component.memoryTypes[1];
                    return true;
                } else {
                    throw new Error("Incompatible specs");
                }
            case "GPU":
                //code
                break;
            case "RAM":
                //code
                break;
            default:
                throw new Error("Incompatible component");
        }

    }
}

export {Motherboard};