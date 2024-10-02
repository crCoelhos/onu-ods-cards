import React, { FC, SVGProps } from "react";

interface SvgProps extends SVGProps<SVGSVGElement> {
  size?: number;
  showTitle?: boolean;
}

const Svg5IgualdadeDeGenero: FC<SvgProps> = ({
  size = 512,
  showTitle = false,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 720 720"
    width={size}
    height={size}
    {...props}
  >
    {showTitle && <title>5 - IGUALDADE DE GÊNERO</title>}
    <defs>
      <style>{".5-igualdade-de-genero_svg__cls-2{fill:#fff}"}</style>
    </defs>
    <path
      id="5-igualdade-de-genero_svg__goal_background"
      fill="#ff3a21"
      d="M-1.08-1.08h722.16v722.16H-1.08z"
      data-name="goal background"
    />
    <g
      id="5-igualdade-de-genero_svg__ENG_text_graphics"
      data-name="ENG text &amp; graphics"
    >
      <path
        d="M55.63 159.48h25.5c0 15.13 1.87 23 11.39 22.61 10-.34 10.54-11.56 10.54-29.58 0-14.62-1.53-25-11.73-25-6.12 0-10 4.25-11.73 12.41H57l1.87-78.2h63.23v22.62H80.28l-1.36 30.43c2.72-3.4 9.69-6.12 17.34-6.63 21.25-1.87 31.62 15 31.62 43.18 0 29.24-5.61 50.32-36.89 50.32-29.07 0-35.36-16.64-35.36-42.16m133.59-97.85h9.49v52.65h-9.49zm16.45 35.29V79.24c0-11.31 3.44-18.2 15-18.2 10.79 0 14.57 5.59 14.57 15.34v2.73h-9.17v-3c0-5.07-.52-8.06-5.27-8.06-5.07 0-5.46 4.1-5.46 8.91V99c0 5.46 1 8.91 5.72 8.91s5.79-3.64 5.79-9.36v-4.94h-5.65v-6h14.31v26.72h-6.25l-.65-5.14a8.87 8.87 0 0 1-8.9 5.85c-10.4-.04-14.04-7.04-14.04-18.12m36.46.33V61.63h9.36v36.72c0 5 .59 9.49 5.46 9.49s5.53-4.48 5.53-9.49V61.63h9.29v35.62c0 11-3 17.74-14.82 17.74s-14.82-6.69-14.82-17.74m44.46-35.62h10.27l10.53 52.65h-8.9l-2.08-12.16h-9.17l-2.14 12.16h-9zM295.37 96l-3.58-22.1-3.57 22.1zm16.96-34.37h9.56v46.08h12.8v6.57h-22.36zm27.04 0h12.42c12.8 0 16.7 5.13 16.7 16.38v19.17c0 11.57-4 17.1-16.31 17.1h-12.81zm12.55 45.95c6.56 0 6.82-3.51 6.82-10.07V77.36c0-6.31-.65-8.91-6.95-8.91h-2.86v39.13zm30.81-45.95H393l10.53 52.65h-8.91l-2.08-12.16h-9.16l-2.15 12.16h-9zM391.5 96l-3.57-22.1-3.58 22.1zm16.96-34.37h12.42c12.81 0 16.71 5.13 16.71 16.38v19.17c0 11.57-4 17.1-16.32 17.1h-12.81zM421 107.58c6.57 0 6.83-3.51 6.83-10.07V77.36c0-6.31-.65-8.91-7-8.91H418v39.13zm23.34-45.95h22.11v6.76H453.9v15.14h9.88v6.7h-9.88v17.48h12.68v6.57h-22.24zm-255.34 86h12.42c12.8 0 16.71 5.13 16.71 16.38v19.17c0 11.57-4 17.1-16.32 17.1H189zm12.55 46c6.56 0 6.83-3.51 6.83-10.07v-20.2c0-6.31-.66-8.91-7-8.91h-2.86v39.13zm23.29-46h22.1v6.76H234.4v15.14h9.88v6.7h-9.88v17.48h12.67v6.57h-22.23zM267 182.92v-17.68c0-11.31 3.45-18.2 15-18.2 10.79 0 14.56 5.59 14.56 15.34v2.73h-9.17v-3c0-5.07-.52-8.06-5.26-8.06-5.07 0-5.46 4.1-5.46 8.91v22c0 5.46 1 8.91 5.72 8.91s5.78-3.64 5.78-9.36v-4.94h-5.67v-6.05h14.3v26.72h-6.24l-.65-5.14c-1.43 3.38-4 5.85-8.91 5.85-10.4.05-14-6.95-14-18.03m36.82-35.29h22.1v6.76h-12.55v15.14h9.88v6.7h-9.88v17.48h12.68v6.57h-22.23zm7.18-16.12h8l6 12h-6.56l-3.38-7.8-3.32 7.8h-6.5zm20.31 16.12H338l12.8 30v-30h7.93v52.65h-6.37l-12.86-31.46v31.46h-8.19zm35.1 0h22.1v6.76H376v15.14h9.88v6.7H376v17.48h12.67v6.57h-22.26zm27.5 0h12.67c10.53 0 16.51 3.38 16.51 14 0 6.31-1.56 10.73-6.5 12.74l7.35 25.94h-9.62L408 176.16h-4.55v24.12h-9.55zm12.61 22.55c5.52 0 7.54-2.4 7.54-8.06 0-5.33-1.5-7.93-7-7.93h-3.58v16zm22.42 13.59V164c0-10.66 3.9-17 15.21-17s15.15 6.31 15.15 17v19.76c0 10.59-3.9 17.22-15.15 17.22s-15.21-6.55-15.21-17.21m20.61 2.23v-24.2c0-4.42-.72-7.74-5.4-7.74s-5.46 3.32-5.46 7.74V186c0 4.36.72 7.87 5.46 7.87s5.4-3.47 5.4-7.87m76.13 85.77h-90.16a1.15 1.15 0 0 0-1.15 1.14v30a1.16 1.16 0 0 0 1.15 1.15h35.9l-39.86 39.84a118 118 0 0 0-190.91 92.88c0 60 44.92 109.57 102.85 117.08v34.52h-35.56a1.14 1.14 0 0 0-1.16 1.14v32.12a1.13 1.13 0 0 0 1.16 1.14h35.56v34a1.14 1.14 0 0 0 1.15 1.15h32.1a1.15 1.15 0 0 0 1.16-1.15v-34h35.56a1.13 1.13 0 0 0 1.14-1.14v-32.12a1.14 1.14 0 0 0-1.14-1.14h-35.56V553.3a118 118 0 0 0 77.36-184.44l39.3-39.31v33.54a1.15 1.15 0 0 0 1.16 1.14h29.95a1.16 1.16 0 0 0 1.17-1.14v-90.18a1.16 1.16 0 0 0-1.17-1.14M358.75 523.71a86.93 86.93 0 1 1 86.92-86.93 87 87 0 0 1-86.92 86.93"
        className="5-igualdade-de-genero_svg__cls-2"
      />
      <path
        d="M411.84 401.1H306.41a1.1 1.1 0 0 0-1.15 1v25.52a1.09 1.09 0 0 0 1.15 1.05h105.43a1.09 1.09 0 0 0 1.17-1.05v-25.49a1.1 1.1 0 0 0-1.17-1m0 45.55H306.41a1.11 1.11 0 0 0-1.15 1.06v25.52a1.08 1.08 0 0 0 1.15 1h105.43a1.09 1.09 0 0 0 1.17-1v-25.52a1.11 1.11 0 0 0-1.17-1.06"
        className="5-igualdade-de-genero_svg__cls-2"
      />
    </g>
  </svg>
);
export default Svg5IgualdadeDeGenero;
