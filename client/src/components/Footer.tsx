export default function Footer() {
  return (
    <footer
      className="py-16 sm:py-20 px-6 sm:px-10"
      style={{ backgroundColor: "#3D342C" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Logo & tagline */}
          <div>
            <p
              className="font-serif text-[#FAF8F4]/85 text-xl tracking-[0.25em] mb-3"
              style={{ fontWeight: 300 }}
            >
              HAEMILSIA
            </p>
            <p
              className="text-[#FAF8F4]/35 text-[12px] tracking-[0.12em] leading-[1.8]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
            >
              빛이 머무는 프라이빗 대저택
            </p>
          </div>

          {/* Location */}
          <div
            className="text-[13px] text-[#FAF8F4]/45 leading-[2]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
          >
            <p className="text-[#C8B89A]/40 text-[11px] tracking-[0.2em] uppercase mb-3">Location</p>
            <p>경기도 화성시 남양읍 역골동로 32-6</p>
            <p>1층 단독주택</p>
          </div>

          {/* Contact */}
          <div
            className="text-[13px] text-[#FAF8F4]/45 leading-[2]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
          >
            <p className="text-[#C8B89A]/40 text-[11px] tracking-[0.2em] uppercase mb-3">Contact</p>
            <p>010-4819-9078</p>
            <a
              href="https://blog.naver.com/haemilsia2277"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF8F4]/65 transition-colors duration-300"
            >
              blog.naver.com/haemilsia2277
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#FAF8F4]/8 my-12" />

        {/* Copyright */}
        <p
          className="text-[#FAF8F4]/20 text-[11px] tracking-[0.1em] text-center"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
        >
          &copy; {new Date().getFullYear()} Haemilsia Opal Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
