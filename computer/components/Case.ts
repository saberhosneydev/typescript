import {CPU} from './CPU'
import {Motherboard} from './Motherboard'
import {RAM} from "./RAM";

let mb = new Motherboard(2066, "x299", 256, [2133, 2400, 2666, 2933], "DDR4", ["NVIDIA® Quad-GPU SLI™ and 2-Way NVIDIA® SLI™ technologies", "AMD Quad-GPU CrossFire™ and 2-Way AMD CrossFire™ technologies"], [3, 16], [3, 16], [3, 16], [16, 16, 16], 2, 8, 6, "Aquantia 10GbE LAN chip", 10000, "Intel® GbE LAN chip", 1000, "Wi-Fi 802.11a/b/g/n/ac/ax", 2.4, 2.5, 5.0, "Realtek® ALC1220-VB", 6, 0, 0, 2);
let cpu = new CPU("Intel Core i9-7900x", "desktop", "14nm", 10, 20, 3.30, 4.30, [13.5, 3], 140, 128, ["DDR4", 2666], 4, 3.0, 2066, 95);
let ram1 = new RAM("Corsair vengeance", "DDR4", 8, 2666);
console.log(mb.insertToConnector("CPU", cpu));
console.log(mb.insertToConnector("RAM", ram1));