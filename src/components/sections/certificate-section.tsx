import { MAIN_COLOR_BLACK, MAIN_COLOR_WHITE } from "@/constants/colors";
import { certificates } from "@/utils/data";
import { Image, Title } from "@mantine/core";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CertificateSection() {
  return (
    <div
      id="certificates"
      style={{
        marginTop: -10,
        backgroundColor: MAIN_COLOR_BLACK,
      }}
    >
      <Title c={MAIN_COLOR_WHITE} ta={"center"} mb={20}>
        Certificates
      </Title>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
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
        scrollbar={{ draggable: true }}
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
