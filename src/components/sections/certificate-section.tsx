import { MAIN_COLOR_BLACK } from "@/constants/colors";
import { Sections } from "@/constants/sections";
import { certificates } from "@/utils/data/certificates";
import { Image } from "@mantine/core";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../section-title";

export default function CertificateSection() {
  return (
    <div
      id={Sections.CERTIFICATES}
      style={{
        marginTop: -10,
        backgroundColor: MAIN_COLOR_BLACK,
        paddingBottom: 30,
      }}
    >
      <SectionTitle>Certificates</SectionTitle>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {certificates.map((certificate) => (
          <SwiperSlide key={certificate.title}>
            <Image src={certificate.image} alt={certificate.title} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
