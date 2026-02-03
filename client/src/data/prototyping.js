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
        title: "Why Choose Our Prototyping Services",
        points: [
            "Rapid conversion of CAD designs into physical components",
            "CNC machining aligned with production-grade tolerances",
            "Early detection of design, fitment, and tolerance issues",
            "Faster validation cycles reducing overall project timelines",
            "Seamless transition from prototype to manufacturing",
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
