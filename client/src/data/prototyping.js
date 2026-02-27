// Assets
import heroVideo from "../assets/prototyping/hero-video.mp4";
import cncImg from "../assets/prototyping/cnc.png";
import validationImg from "../assets/prototyping/validation.png";
import iterationImg from "../assets/prototyping/iteration.png";

// Data
export const prototypingData = {
    hero: {
        title: "Prototyping",
        video: heroVideo,
        bullets: [
            "CNC-based rapid prototyping",
            "Dimensional and functional validation",
            "Production-ready iterations",
        ],
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
            title: "Rapid CNC Prototyping",
            description:
                "We manufacture functional prototypes using CNC processes that closely replicate real production conditions, enabling accurate evaluation of form, fit, and function.",
            image: cncImg,
        },
        {
            title: "Dimensional & Functional Validation",
            description:
                "Each prototype undergoes detailed dimensional inspection and functional assessment to verify design intent and uncover improvement opportunities early.",
            image: validationImg,
        },
        {
            title: "Prototype Iteration & Refinement",
            description:
                "We support iterative prototyping cycles, refining designs based on test results to ensure final components meet performance and manufacturing expectations.",
            image: iterationImg,
        },
    ],
};
