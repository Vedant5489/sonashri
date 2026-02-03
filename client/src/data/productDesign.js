import heroVideo from "../assets/product-design/hero-video.mp4";
import conceptImg from "../assets/product-design/concept.png";
import cadImg from "../assets/product-design/cad.png";
import dfmImg from "../assets/product-design/dfm.png";

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
        title: "Why Choose Our Product Design Services",
        points: [
            "Performance-optimized and cost-aware design solutions",
            "Manufacturing feasibility considered from day one",
            "Automotive-grade CAD standards and tolerances",
            "Reduced downstream rework and faster iterations",
            "Seamless collaboration with prototyping teams",
        ],
    },

    capabilities: [
        {
            title: "Concept & Requirement Engineering",
            description:
                "We translate functional requirements into robust engineering concepts aligned with performance, regulatory, and cost goals.",
            image: conceptImg,
        },
        {
            title: "Advanced CAD & Structural Design",
            description:
                "Our CAD workflows ensure dimensional accuracy, structural integrity, and readiness for prototyping and validation.",
            image: cadImg,
        },
        {
            title: "Design for Manufacturability (DFM)",
            description:
                "Designs are evaluated early for tooling, machining, and assembly feasibility to minimize production risks.",
            image: dfmImg,
        },
    ],
};
