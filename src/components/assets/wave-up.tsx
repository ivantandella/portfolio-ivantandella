import { MAIN_COLOR_BLACK, MAIN_COLOR_GREY } from "@/constants/colors";

export default function WaveUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{ backgroundColor: MAIN_COLOR_BLACK }}
    >
      <path
        fill={MAIN_COLOR_GREY}
        fillOpacity="1"
        d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,149.3C672,160,768,128,864,101.3C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}
