"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const announcements = [
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
  "يمكنكم الآن الاطلاع على ترتيب نتائج الفرق الأربعة للفصل الدراسي الأول - 2026.",
];

export default () => {
  return (
    <div className="bg-black py-4 text-xl font-tajawal text-white px-4">
      <Swiper
        slidesPerView="auto"
        spaceBetween={50}
        loop
        speed={15000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{
          transitionTimingFunction: "linear",
        }}
      >
        {announcements.map((announcement, index) => (
          <SwiperSlide key={index} className="w-auto! whitespace-nowrap">
            <p>{announcement}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
