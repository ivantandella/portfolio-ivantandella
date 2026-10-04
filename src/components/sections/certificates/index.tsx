import { useState } from "react";
import { Sections } from "@/constants/sections";
import { certificates } from "@/utils/data/certificates";
import { Grid } from "@mantine/core";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "@/components/section-title";
import Button from "@/components/common/button";
import {
  sectionWrapper,
  contentContainer,
  certCard,
  certImage,
  certTitleText,
  buttonFlex,
} from "./styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CertificateSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id={Sections.CERTIFICATES} className={sectionWrapper}>
      <SectionTitle subtitle="ACHIEVEMENTS">Certificates</SectionTitle>

      <div className={contentContainer}>
        {!showAll ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: 50 }}
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.title}>
                <div className={certCard}>
                  <img src={cert.image} alt={cert.title} className={certImage} />
                  <div className={certTitleText}>{cert.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid gap="md" mb={30}>
            {certificates.map((cert) => (
              <Grid.Col key={cert.title} span={{ base: 12, sm: 6, md: 4 }}>
                <div className={certCard}>
                  <img src={cert.image} alt={cert.title} className={certImage} />
                  <div className={certTitleText}>{cert.title}</div>
                </div>
              </Grid.Col>
            ))}
          </Grid>
        )}

        <div className={buttonFlex}>
          <Button variant="secondary" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "SHOW CAROUSEL" : "VIEW ALL"}
          </Button>
        </div>
      </div>
    </section>
  );
}
