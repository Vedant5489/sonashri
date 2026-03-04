// src/data/prototyping.js

import heroVideo from "../assets/prototyping/hero-video.mp4";
import automImg from "../assets/prototyping/automImg.png";
import nonautomImg from "../assets/prototyping/nonautomImg.png";

/* Machine slideshow images */
import machine1 from "../assets/prototyping/machines/machine1.png";
import machine2 from "../assets/prototyping/machines/machine2.png";
import machine3 from "../assets/prototyping/machines/machine3.png";
import machine4 from "../assets/prototyping/machines/machine4.png";
import machine5 from "../assets/prototyping/machines/machine5.png";
import machine6 from "../assets/prototyping/machines/machine6.png";
import machine7 from "../assets/prototyping/machines/machine7.png";
import machine8 from "../assets/prototyping/machines/machine8.png";

export const prototypingData = {

    hero: {
        title: "Prototyping",
        video: heroVideo,
        bullets: [
            "Precision CNC machining for production-grade prototype components",
            "Rapid design validation through accurate dimensional and functional testing",
            "Seamless transition from engineering design to manufacturable parts",
        ],
    },

    overview: {
        title: "Why SES",
        points: [
            "Fast Turnaround Time",
            "Precision & Dimensional Accuracy",
            "Cost-Effective Development",
            "Skilled Technical Team",
            "Flexible for Low Volume & Trial Parts",
            " Strong Quality Control Process",
            "Skilled Technical Team"
        ],
    },

    capabilities: [

        {
            title: "Automobile Parts",
            description: [
                "We deliver end-to-end vehicle engineering solutions.",
                "Engineering solutions for complex sheet metal parts and welding assemblies for two-wheelers and four-wheelers.",
                "Includes skin panels, B-grade parts, and structural assemblies.",
                "Achieving production-level quality during the prototype stage.",
                "Supporting urgent development projects and batch production.",
                "Supplying to valued customers such as Ather Energy, TVS Motors, John Deere, and Mahindra."
            ],
            image: automImg,
        },

        {
            title: "Non-Automobile Parts",
            description: [
                "We deliver end-to-end heavy engineering solutions.",
                "Engineering support for complex sheet metal, aluminum components, and fixture assemblies.",
                "Maintaining production-grade quality during prototype development.",
                "Flexible for low-volume production and trial components.",
                "Supplying to valued customers such as Voith Turbo, Cummins, Dynak, and 3DPD Development."
            ],
            image: nonautomImg,
        },

        {
            title: "Facilities",

            slideshow: [

                {
                    title: "Hydraulic Press – 500  Ton (Bed  size 1500 X 1500)",
                    description:
                        "Heavy-duty hydraulic press designed for forming large sheet metal components. The 1500 × 1500 mm bed allows high-capacity operations for demanding prototype and production trials.",
                    image: machine1,
                },

                {
                    title: "Hydraulic Press – 200  Ton (Bed  size 1200 X 1000)",
                    description:
                        "A versatile press used for precision forming and shaping of medium-scale components. Ideal for controlled prototype manufacturing and dimensional consistency.",
                    image: machine2,
                },

                {
                    title: "Hydraulic Press – 150  Ton (Bed  size 650 X 650)(2Nos)",
                    description:
                        "Compact yet powerful press suited for smaller sheet metal forming operations. Frequently used during early prototype stages and component testing.",
                    image: machine3,
                },

                {
                    title: "VMC 1100 X 550 X 550 Table size(mm) (3Nos)",
                    description:
                        "A high-precision Vertical Machining Center designed for accurate milling, drilling, and contouring of medium-sized components. Ideal for prototype development and precision machining where dimensional accuracy and repeatability are critical.",
                    image: machine4,
                },

                {
                    title: "VMC 1300 X 600 X 600 Table size(mm) (5Nos)",
                    description:
                        "A large-capacity Vertical Machining Center capable of machining complex and larger components with high stability and precision. Enables efficient CNC milling operations for both prototype parts and production-grade machining requirements.",
                    image: machine5,
                },

                {
                    title: "Milling Machine",
                    description:
                        "Precision machining machine used to remove material from a workpiece using rotating cutting tools. It enables accurate shaping, slotting, and surface finishing of metal components during prototype and production stages.",
                    image: machine6,
                },

                {
                    title: "Laser Welding Machine Galaxy 1500",
                    description:
                        "Professional welding setup used for assembling sheet metal and fabricated components. Ensures structural integrity during prototype builds.",
                    image: machine7,
                },

                {
                    title: "3D laser cut Machine 3000 X 2000 X 800",
                    description:
                        "Dedicated welding system supporting fabrication and prototype assembly. Enables strong and consistent joints for functional prototype validation.",
                    image: machine8,
                }

            ],
        }

    ],
};