import { MAIN_COLOR_BLACK, MAIN_COLOR_GREY } from "@/constants/colors";

export default function WaveDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        position: "relative",
        zIndex: -1,
        backgroundColor: MAIN_COLOR_BLACK,
      }}
      className="wave-down"
    >
      <path
        fill={MAIN_COLOR_GREY}
        fillOpacity="1"
        d="M0,160L48,165.3C96,171,192,181,288,208C384,235,480,277,576,256C672,235,768,149,864,144C960,139,1056,213,1152,245.3C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}
