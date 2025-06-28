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
                    r="0"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    opacity={0.1}
                    
                >
          <animate
            attributeName="r"
            values="0;200"
            dur="6s"
            repeatCount="indefinite"
          />
           <animate
                        attributeName="opacity"
                        values="0;0.1"
                        dur="6s"
                        repeatCount="indefinite"
                    />
        </circle>
                <circle
                    cx="50%"
                    cy="70%"
                    r="200"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    opacity={0.1}
                    
                >
          <animate
            attributeName="r"
            values="200;400"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
                <circle
                    cx="50%"
                    cy="70%"
                    r="400"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    opacity={0.1}
                 >
          <animate
            attributeName="r"
            values="400;600"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
                <circle
                    cx="50%"
                    cy="70%"
                    r="600"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    opacity={0.06}
                 >
          <animate
            attributeName="r"
            values="600;800"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate
                        attributeName="opacity"
                        values="0.1;0"
                        dur="6s"
                        repeatCount="indefinite"
                    />
        </circle>
            </svg>
            
        </div>
    );
}
