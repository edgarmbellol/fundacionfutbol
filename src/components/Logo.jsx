import React from 'react';

const Logo = ({ className = "w-16 h-16" }) => {
  return (
    <svg
      viewBox="0 0 200 260"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Escudo verde con forma heráldica */}
      <path
        d="M 100 15 L 170 25 L 175 60 Q 175 100, 170 130 Q 165 155, 155 175 Q 145 190, 130 205 L 100 230 L 70 205 Q 55 190, 45 175 Q 35 155, 30 130 Q 25 100, 25 60 L 30 25 Z"
        fill="#00843D"
        stroke="#000000"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      
      {/* Cabeza de león estilizada - perfil derecho */}
      <g transform="translate(95, 70)">
        {/* Melena principal - flujo hacia atrás */}
        <ellipse cx="-8" cy="0" rx="28" ry="25" fill="#000000" />
        
        {/* Parte superior de la melena */}
        <path
          d="M -30 -5 Q -35 -12, -32 -20 L -28 -15 Q -25 -10, -22 -8"
          fill="#000000"
        />
        
        {/* Melena lateral izquierda */}
        <path
          d="M -32 5 Q -38 10, -38 18 L -34 15 Q -30 10, -28 5"
          fill="#000000"
        />
        
        {/* Melena inferior */}
        <path
          d="M -28 15 Q -32 22, -30 28 L -26 24 Q -22 18, -20 15"
          fill="#000000"
        />
        
        {/* Cabeza - parte frontal */}
        <ellipse cx="5" cy="2" rx="20" ry="18" fill="#000000" />
        
        {/* Hocico */}
        <path
          d="M 15 5 Q 22 5, 25 8 L 24 12 Q 20 15, 15 13"
          fill="#000000"
        />
        
        {/* Mejilla/mandíbula */}
        <path
          d="M 20 -5 Q 28 -3, 32 0 Q 30 8, 25 12"
          fill="#000000"
        />
        
        {/* Parte superior del hocico */}
        <path
          d="M 18 -8 Q 25 -10, 30 -8 Q 28 -3, 24 -2"
          fill="#000000"
        />
      </g>
      
      {/* Texto V.R con punto en medio */}
      <g transform="translate(100, 125)">
        <text
          x="-18"
          y="5"
          fontFamily="Arial, sans-serif"
          fontSize="22"
          fontWeight="bold"
          fill="#000000"
        >
          V
        </text>
        {/* Punto entre V y R */}
        <circle cx="0" cy="0" r="2.5" fill="#000000" />
        <text
          x="6"
          y="5"
          fontFamily="Arial, sans-serif"
          fontSize="22"
          fontWeight="bold"
          fill="#000000"
        >
          R
        </text>
      </g>
      
      {/* Definir las curvas para el texto */}
      <defs>
        <path
          id="curveClub"
          d="M 45 190 Q 55 205, 75 212"
        />
        <path
          id="curveFutsal"
          d="M 125 212 Q 145 205, 155 190"
        />
      </defs>
      
      {/* Texto CLUB (curva izquierda inferior) */}
      <text
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="#000000"
        letterSpacing="1"
      >
        <textPath href="#curveClub" startOffset="50%" textAnchor="middle">
          CLUB
        </textPath>
      </text>
      
      {/* Texto FUTSAL (curva derecha inferior) */}
      <text
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="#000000"
        letterSpacing="0.5"
      >
        <textPath href="#curveFutsal" startOffset="50%" textAnchor="middle">
          FUTSAL
        </textPath>
      </text>
    </svg>
  );
};

export default Logo;

