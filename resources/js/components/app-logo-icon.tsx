import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <text
                x="20"
                y="27"
                fill="currentColor"
                fontFamily="Arial, sans-serif"
                fontSize="20"
                fontWeight="700"
                letterSpacing="-1.5"
                textAnchor="middle"
            >
                GF
            </text>
        </svg>
    );
}
