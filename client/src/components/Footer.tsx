/*
 * Footer — HAEMILSIA 58 Branding
 * "58" uses Playfair Display Italic
 * 사업자 정보 포함 (네이버 파워링크 광고용)
 */

export default function Footer() {
  return (
    <footer
      className="py-12 sm:py-16 lg:py-20 px-5 sm:px-10"
      style={{ backgroundColor: "#3D342C" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8">
          {/* Logo & tagline */}
          <div>
            <p className="flex items-baseline gap-1.5 mb-2 sm:mb-3">
              <span
                className="text-[#FAF8F4]/85 text-lg sm:text-xl tracking-[0.25em]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                HAEMILSIA
              </span>
              <span
                className="text-[#C8B89A]/70 text-xl sm:text-2xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  letterSpacing: "0.02em",
                }}
              >
                58
              </span>
            </p>
            <p
              className="text-[#FAF8F4]/35 text-[11px] sm:text-[12px] tracking-[0.12em] leading-[1.8]"
              style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
            >
              빛이 머무는 프라이빗 대저택
            </p>
          </div>

          {/* Location */}
          <div
            className="text-[12px] sm:text-[13px] text-[#FAF8F4]/45 leading-[1.9] sm:leading-[2]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
          >
            <p className="text-[#C8B89A]/40 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-2 sm:mb-3">Location</p>
            <p>경기도 화성시 남양읍 역골동로 32-6</p>
            <p>1층 단독주택</p>
          </div>

          {/* Contact */}
          <div
            className="text-[12px] sm:text-[13px] text-[#FAF8F4]/45 leading-[1.9] sm:leading-[2]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
          >
            <p className="text-[#C8B89A]/40 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-2 sm:mb-3">Contact</p>
            <a
              href="tel:010-4819-9078"
              className="block hover:text-[#FAF8F4]/65 active:text-[#FAF8F4]/65 transition-colors duration-300"
            >
              010-4819-9078
            </a>
            <a
              href="https://blog.naver.com/haemilsia2277"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#FAF8F4]/65 active:text-[#FAF8F4]/65 transition-colors duration-300 break-all sm:break-normal"
            >
              blog.naver.com/haemilsia2277
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#FAF8F4]/8 my-8 sm:my-12" />

        {/* 사업자 정보 — 네이버 파워링크 광고용 */}
        <div
          className="mb-6 sm:mb-8 text-[#FAF8F4]/20 text-[10px] sm:text-[11px] leading-[2] sm:leading-[2.2]"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-0.5 sm:gap-y-0 sm:gap-x-1">
            <span>상호 : 태흥스펀지</span>
            <span className="hidden sm:inline text-[#FAF8F4]/10">|</span>
            <span>대표 : 최숙영</span>
            <span className="hidden sm:inline text-[#FAF8F4]/10">|</span>
            <span>사업자등록번호 : 124-12-62101</span>
          </div>
          <p className="mt-0.5">
            주소 : 경기도 화성시 남양읍 현대기아로 376-13번지
          </p>
        </div>

        {/* Copyright */}
        <p
          className="text-[#FAF8F4]/20 text-[10px] sm:text-[11px] tracking-[0.1em] text-center"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 200 }}
        >
          &copy; {new Date().getFullYear()} Haemilsia 58 Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
