import heroVideo from "../assets/product-design/hero-video.mp4";
import biwImg from "../assets/product-design/biw.png";
import closureImg from "../assets/product-design/closure.png";
import exteriorImg from "../assets/product-design/exterior.png";
import interiorImg from "../assets/product-design/interior.png";

export const productDesignData = {
    hero: {
        title: "Product Design",
        bullets: [
            "Concept-to-CAD automotive engineering",
            "Strength, safety & manufacturability driven",
            "Designed for real-world production",
        ],
        video: heroVideo,
    },

    overview: {
        title: "Why SES",
        points: [
            "Accelerated time-to-market through agile engineering execution and rapid iteration cycles",
            "Complete vehicle-level expertise spanning concept, design, validation, and production support",
            "Flexible engagement models tailored to your project scope, timeline, and budget needs",
            "Seamlessly integrate as an extension of your in-house engineering and R&D teams",
            "Real-time manufacturing knowledge ensuring design feasibility and production readiness",
            "Innovation-driven solutions focused on performance optimization and long-term value creation"
        ],
    },

    capabilities: [
        {
            title: "(BIW) Body In White",
            description:
                `We design and develop full vehicle body structures including:
                    Underbody (Front Floor, Rear Floor, Tunnel)
                    Body Side Inner & Outer
                    Roof Structure
                    Front End Structure
                    Rear End Structure
                    Cross Members & Reinforcements
                    Sub-frame Integration Points
                    Battery Housing Integration (for EV platforms)
                `,
            image: biwImg,
        },
        {
            title: "Closure System",
            description:
                `We provide full development of all closure assemblies:
                        Hood System
                        Inner & outer panel design
                        Hemming & reinforcement strategy
                        Latch & striker integration
                        Pedestrian protection compliance
                        Doors (Front & Rear)
                        Door inner & outer panels
                        Side impact beam integration
                        Hinge & check mounting
                        Sealing interface definition
                        Tailgate / Backdoor
                        Steel or aluminum tailgate development
                        Gas stay & latch integration
                        Wiper motor mounting provisions
                        Fenders & Roof Closures
                    `,
            image: closureImg,
        },
        {
            title: "Interior Trims",
            description:
                `We design and develop complete interior trim assemblies, including:
                    Instrument Panel (IP) & Cockpit Systems
                    Door Trims & Armrests
                    Center Console Systems
                    Pillar Garnishes (A, B, C, D)
                    Headliners
                    Floor Console & Carpet Systems
                    Package Tray
                    Seat Plastics & Shrouds
                `,
            image: interiorImg,
        },
        {
            title: "Exterior Trims",
            description:
                `Our exterior trim expertise includes:
                    Bumper Fascia Systems
                    Grilles & Garnishes
                    Claddings & Wheel Arch Mouldings
                    Roof Rails
                    Spoilers
                    Rocker Panels
                    Tailgate & Backdoor Trims
                `,
            image: exteriorImg,
        },
    ],
};
