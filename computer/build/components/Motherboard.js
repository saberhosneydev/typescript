"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motherboard = void 0;
class Motherboard {
    constructor(cpuSocket, chipset, memorySlots, memoryMax, memorySpeed, memoryType, multiGpuSupport, PCIeSlotOne, PCIeSlotTwo, PCIeSlotThree, PCIeSlotsAllActiveRunningSpeed, M2Slots, SataSlots, SataSpeed, lanController, lanSpeed, secondLanController, secondLanSpeed, wirelessController, wirelessSpeed, wirelessFrequency, bluetoothVersion, audioController, usb32Ports, usb31Ports, usb30Ports, usb20Ports) {
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
    insertToConnector(ComponentConnector, Component) {
        switch (ComponentConnector) {
            case "CPU":
                // @ts-ignore
                if (this.cpuSocket === Component.socket && this.memoryType === Component.memoryTypes[0] && this.memorySpeed.includes(Component.memoryTypes[1])) {
                    this[ComponentConnector] = Component;
                    this.availableMemory = Component.maxMemorySize;
                    this.availableMemorySpeed = Component.memoryTypes[1];
                    return true;
                }
                else {
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
exports.Motherboard = Motherboard;
