// src/components/BackgroundArcs.tsx
export default function BackgroundArcs() {
    return (
        <div
            style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "100vw",
                height: "200px",
                pointerEvents: "none",
                zIndex: 1,
            }}
        >
            <svg width="100%" height="100vh">
                <circle
                    cx="50%"
                    cy="70%"
                    r="200"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    opacity={0.1}
                />
                <circle
                    cx="50%"
                    cy="70%"
                    r="400"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    opacity={0.1}
                />
                <circle
                    cx="50%"
                    cy="70%"
                    r="600"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    opacity={0.06}
                />
            </svg>
            
        </div>
    );
}
