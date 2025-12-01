"use client";

import Image from "next/image";
import {
  Palette,
  Truck,
  ShieldCheck,
  CreditCard,
  Sofa,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const categories = [
    {
      name: "Meble do Salonu",
      description: "Eleganckie sofy, fotele i zestawy wypoczynkowe",
      image: "/photo-1.jpg",
    },
    {
      name: "Meble do Sypialni",
      description: "Łóżka, szafy i komody w nowoczesnym stylu",
      image: "/photo-2.jpg",
    },
    {
      name: "Meble do Jadalni",
      description: "Stoły, krzesła i bufety dla Twojej kuchni",
      image: "/photo-3.jpg",
    },
    {
      name: "Meble Biurowe",
      description: "Biurka, regały i ergonomiczne rozwiązania",
      image: "/photo-4.jpg",
    },
    {
      name: "Dekoracje",
      description: "Lampy, dywany i akcesoria do wnętrz",
      image: "/photo-5.jpg",
    },
    {
      name: "Meble Ogrodowe",
      description: "Zestawy tarasowe i meble na zewnątrz",
      image: "/photo-6.jpg",
    },
  ];

  const featuredProducts = [
    {
      name: "Sofa Moderna",
      category: "Salon",
      price: "4 999 zł",
      image: "/photo-7.jpg",
    },
    {
      name: "Stół Jadalniany Oak",
      category: "Jadalnia",
      price: "2 499 zł",
      image: "/photo-8.jpg",
    },
    {
      name: "Łóżko Minimalist",
      category: "Sypialnia",
      price: "3 299 zł",
      image: "/photo-9.jpg",
    },
    {
      name: "Biurko Executive",
      category: "Biuro",
      price: "1 899 zł",
      image: "/photo-10.jpg",
    },
  ];

  const galleryImages = [
    "/photo-11.jpg",
    "/photo-12.jpg",
    "/photo-1.jpg",
    "/photo-2.jpg",
    "/photo-3.jpg",
    "/photo-4.jpg",
  ];

  const services = [
    {
      title: "Projektowanie Wnętrz",
      description: "Bezpłatne konsultacje z naszymi projektantami wnętrz",
      icon: Palette,
    },
    {
      title: "Darmowa Dostawa",
      description: "Dostawa i montaż mebli w całej Polsce",
      icon: Truck,
    },
    {
      title: "Gwarancja Jakości",
      description: "Wszystkie produkty objęte gwarancją producenta",
      icon: ShieldCheck,
    },
    {
      title: "Finansowanie",
      description: "Możliwość rozłożenia płatności na raty",
      icon: CreditCard,
    },
  ];

  const testimonials = [
    {
      name: "Anna Kowalska",
      location: "Warszawa",
      text: "Fantastyczna obsługa i piękne meble! Salon pomógł mi urządzić całe mieszkanie. Wszystko wygląda profesjonalnie i nowocześnie.",
      rating: 5,
    },
    {
      name: "Marek Nowak",
      location: "Kraków",
      text: "Najlepszy salon meblowy w mieście. Jakość produktów jest doskonała, a ceny bardzo konkurencyjne. Polecam!",
      rating: 5,
    },
    {
      name: "Katarzyna Wiśniewska",
      location: "Gdańsk",
      text: "Zakupiłam kompletną sypialnię. Meble są solidne, pięknie wykonane i idealnie pasują do mojego wnętrza. Dziękuję!",
      rating: 5,
    },
  ];

  // Check scroll position
  const checkScrollButtons = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setCanScrollLeft(carousel.scrollLeft > 0);
    setCanScrollRight(
      carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth - 10
    );
  };

  // Scroll functions
  const scrollLeft = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: -400, behavior: "smooth" });
    setTimeout(checkScrollButtons, 300);
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: 400, behavior: "smooth" });
    setTimeout(checkScrollButtons, 300);
  };

  // Auto-scroll carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    let isPaused = false;
    const scrollSpeed = 0.5; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && carousel) {
        scrollPosition += scrollSpeed;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0; // Reset to start
        }

        carousel.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Pause on hover/touch
    const handleMouseEnter = () => {
      isPaused = true;
    };
    const handleMouseLeave = () => {
      isPaused = false;
    };
    const handleTouchStart = () => {
      isPaused = true;
    };
    const handleTouchEnd = () => {
      setTimeout(() => {
        isPaused = false;
      }, 2000); // Resume after 2s
    };

    checkScrollButtons();
    carousel.addEventListener("scroll", checkScrollButtons);
    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchend", handleTouchEnd);

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      carousel.removeEventListener("scroll", checkScrollButtons);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-light tracking-wider text-[#d4af37]/80 flex-1">
              <a
                href="#oferta"
                className="hover:text-[#d4af37] transition-colors duration-300 relative group"
              >
                Oferta
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#bestsellery"
                className="hover:text-[#d4af37] transition-colors duration-300 relative group"
              >
                Bestsellery
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Center Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group absolute left-1/2 transform -translate-x-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#d4af37]/20 rounded-lg blur-md group-hover:bg-[#d4af37]/30 transition-all duration-300"></div>
                <div className="relative p-2 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg">
                  <Sofa className="w-7 h-7 text-[#0a0a0a]" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-[var(--font-cinzel)] font-bold tracking-wider text-[#d4af37] leading-tight">
                  Salon Meblowy
                </span>
                <span className="text-[9px] font-light tracking-[0.25em] text-[#d4af37]/60 uppercase">
                  Luksusowe Wnętrza
                </span>
              </div>
            </a>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-light tracking-wider text-[#d4af37]/80 flex-1 justify-end">
              <a
                href="#o-nas"
                className="hover:text-[#d4af37] transition-colors duration-300 relative group"
              >
                O nas
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#uslugi"
                className="hover:text-[#d4af37] transition-colors duration-300 relative group"
              >
                Usługi
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#kontakt"
                className="hover:text-[#d4af37] transition-colors duration-300 relative group"
              >
                Kontakt
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#d4af37] p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-[#1a1a1a] py-6">
              <div className="flex flex-col gap-4 px-6">
                <a
                  href="#oferta"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#d4af37]/80 hover:text-[#d4af37] transition-colors py-2 border-b border-[#1a1a1a]"
                >
                  Oferta
                </a>
                <a
                  href="#bestsellery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#d4af37]/80 hover:text-[#d4af37] transition-colors py-2 border-b border-[#1a1a1a]"
                >
                  Bestsellery
                </a>
                <a
                  href="#o-nas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#d4af37]/80 hover:text-[#d4af37] transition-colors py-2 border-b border-[#1a1a1a]"
                >
                  O nas
                </a>
                <a
                  href="#uslugi"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#d4af37]/80 hover:text-[#d4af37] transition-colors py-2 border-b border-[#1a1a1a]"
                >
                  Usługi
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#d4af37]/80 hover:text-[#d4af37] transition-colors py-2"
                >
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-96px)] flex items-center px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#d4af37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>

        {/* Decorative dots pattern */}
        <div className="absolute top-10 right-0 w-[400px] h-[400px] dots-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-gradient-to-br from-transparent via-transparent to-[#0a0a0a] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <div className="inline-block">
                  <span className="text-[#d4af37] font-light tracking-[0.4em] text-xs sm:text-sm uppercase border-l-2 border-[#d4af37] pl-4">
                    Luksusowe Meble
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-[var(--font-cinzel)] font-bold tracking-tight leading-[1.1]">
                  <span className="gradient-gold block mb-2">Wyjątkowe</span>
                  <span className="text-[#f5f5f5] block">Wnętrza</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-[#d4af37]/80 leading-relaxed max-w-xl font-light">
                Odkryj naszą ekskluzywną kolekcję starannie wyselekcjonowanych
                mebli, które łączą ponadczasową elegancję z najwyższą jakością
                wykonania.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#oferta"
                  className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a0a0a] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 overflow-hidden shadow-lg shadow-[#d4af37]/20"
                >
                  <span className="relative z-10">Zobacz Kolekcję</span>
                  <div className="absolute inset-0 shimmer-effect"></div>
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 border-2 border-[#d4af37]/50 text-[#d4af37] text-xs sm:text-sm font-medium tracking-wider uppercase hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300"
                >
                  Skontaktuj się
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] sm:h-[350px] lg:h-[450px] w-full order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-2xl"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#2a2a2a] group shadow-2xl shadow-[#d4af37]/10">
                <Image
                  src="/photo-1.jpg"
                  alt="Luksusowe meble"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent"></div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 w-full h-full border-2 border-[#d4af37]/20 rounded-2xl -z-10 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 border border-[#d4af37]/30 rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-[#d4af37] font-light tracking-[0.3em] text-xs sm:text-sm uppercase border-l-2 border-[#d4af37] pl-4">
                    Promocja
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-cinzel)] font-bold text-[#f5f5f5] leading-tight">
                  <span className="gradient-gold">Specjalna Oferta</span>
                  <br />
                  <span className="text-[#f5f5f5]">-20% na Wszystko</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#d4af37]/80 leading-relaxed font-light max-w-xl">
                  Skorzystaj z wyjątkowej promocji i zaoszczędź 20% na
                  wszystkich produktach z naszej kolekcji. Oferta ważna do końca
                  miesiąca.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#oferta"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a0a0a] text-sm font-semibold tracking-wider uppercase hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 overflow-hidden shadow-lg shadow-[#d4af37]/30"
                  >
                    <span className="relative z-10">Sprawdź Ofertę</span>
                    <div className="absolute inset-0 shimmer-effect"></div>
                  </a>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-xl"></div>
                <div className="relative h-full w-full rounded-xl overflow-hidden border border-[#d4af37]/30 group">
                  <Image
                    src="/photo-7.jpg"
                    alt="Promocja"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent"></div>
                  {/* Discount badge */}
                  <div className="absolute top-6 right-6 bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-[#0a0a0a] px-6 py-3 rounded-full shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold">-20%</div>
                      <div className="text-xs font-medium uppercase tracking-wider">
                        Zniżka
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="text-[#d4af37] font-light tracking-[0.3em] text-sm uppercase">
                Nasza Oferta
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-[var(--font-cinzel)] font-bold text-[#f5f5f5] mb-6">
              Kategorie
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#0a0a0a] p-3 rounded-full transition-all duration-300 hidden sm:flex items-center justify-center"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-[#d4af37]" />
              </button>
            )}

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Gradient fade on left */}
              {canScrollLeft && (
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent pointer-events-none z-10"></div>
              )}
              {/* Gradient fade on right */}
              {canScrollRight && (
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent pointer-events-none z-10"></div>
              )}

              <div ref={carouselRef} className="categories-carousel">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="group relative w-[90vw] sm:w-[400px] h-[400px] sm:h-[500px] bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#d4af37]/50 transition-all duration-500 overflow-hidden cursor-pointer flex-shrink-0"
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <h3 className="text-2xl sm:text-3xl font-[var(--font-cinzel)] font-bold text-[#d4af37] group-hover:text-[#e8d5a3] transition-colors duration-300">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#0a0a0a] p-3 rounded-full transition-all duration-300 hidden sm:flex items-center justify-center"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-[#d4af37]" />
              </button>
            )}

            {/* Scroll indicator */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-[#d4af37]/70">
                <ChevronLeft className="w-4 h-4 opacity-50" />
                <span className="hidden sm:inline">Przewiń</span>
                <ChevronRight className="w-4 h-4 animate-pulse" />
              </div>
              <div className="flex gap-2">
                {categories.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-[#d4af37]/30 border border-[#d4af37]/50"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        id="bestsellery"
        className="py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="text-[#d4af37] font-light tracking-[0.3em] text-sm uppercase">
                Bestsellery
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-[var(--font-cinzel)] font-bold text-[#f5f5f5] mb-6">
              Najczęściej Wybierane
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#d4af37]/50 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-80 w-full overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#d4af37]/60 mb-2 tracking-wider uppercase">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-[var(--font-cinzel)] font-semibold text-[#f5f5f5] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#d4af37]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="text-[#d4af37] font-light tracking-[0.3em] text-sm uppercase">
                Galeria
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-[var(--font-cinzel)] font-bold text-[#f5f5f5] mb-6">
              Nasze Realizacje
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden group cursor-pointer border border-[#2a2a2a] hover:border-[#d4af37]/50 transition-all duration-500"
              >
                <Image
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="text-[#d4af37] font-light tracking-[0.3em] text-sm uppercase">
                Usługi
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-[var(--font-cinzel)] font-bold text-[#f5f5f5] mb-6">
              Kompleksowa Obsługa
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-10 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#d4af37]/50 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-[#0a0a0a] border border-[#d4af37]/30 rounded-full group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/10 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-[#d4af37]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-[var(--font-cinzel)] font-semibold text-[#f5f5f5] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#d4af37]/70 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="text-[#d4af37] font-light tracking-[0.3em] text-sm uppercase">
                Opinie
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-[var(--font-cinzel)] font-bold text-[#f5f5f5] mb-6">
              Co Mówią Klienci
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-10 border border-[#2a2a2a] hover:border-[#d4af37]/30 transition-all duration-500 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#d4af37] to-transparent opacity-0 group-hover:opacity-100"></div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#d4af37]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#d4af37]/80 mb-8 leading-relaxed italic font-light text-lg">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="pt-6 border-t border-[#2a2a2a]">
                  <p className="font-semibold text-[#f5f5f5]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#d4af37]/60 mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="text-[#d4af37] font-light tracking-[0.3em] text-sm uppercase">
                O Nas
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-[var(--font-cinzel)] font-bold text-[#f5f5f5] mb-12">
              Tradycja i Elegancja
            </h2>
            <div className="space-y-8 text-lg text-[#d4af37]/80 leading-relaxed font-light">
              <p className="text-xl">
                Jesteśmy ekskluzywnym salonem meblowym z wieloletnim
                doświadczeniem w branży luksusowych wnętrz. Nasza pasja do
                designu i dbałość o najwyższą jakość sprawiają, że oferujemy
                tylko najlepsze produkty od najbardziej prestiżowych
                producentów.
              </p>
              <p>
                Wierzymy, że meble to nie tylko przedmioty użytkowe, ale dzieła
                sztuki, które kształtują atmosferę Twojego domu. Dlatego każdy
                produkt w naszej ofercie został starannie wyselekcjonowany pod
                kątem jakości, funkcjonalności i ponadczasowej estetyki.
              </p>
              <p>
                Zapraszamy do odwiedzenia naszego salonu, gdzie nasi eksperci
                pomogą Ci stworzyć wyjątkowe przestrzenie, które odzwierciedlają
                Twój indywidualny styl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="kontakt"
        className="py-32 px-6 sm:px-8 lg:px-12 bg-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="text-[#d4af37] font-light tracking-[0.3em] text-sm uppercase">
                Kontakt
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-[var(--font-cinzel)] font-bold text-[#f5f5f5] mb-12">
              Odwiedź Nas
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg text-[#d4af37]/80">
              <div>
                <h3 className="text-2xl font-[var(--font-cinzel)] font-semibold text-[#d4af37] mb-6">
                  Salon Meblowy
                </h3>
                <p className="mb-2 font-light">ul. Przykładowa 123</p>
                <p className="mb-8 font-light">00-000 Warszawa</p>
              </div>
              <div>
                <h3 className="text-2xl font-[var(--font-cinzel)] font-semibold text-[#d4af37] mb-6">
                  Godziny otwarcia
                </h3>
                <p className="mb-2 font-light">
                  Poniedziałek - Piątek: 10:00 - 18:00
                </p>
                <p className="mb-2 font-light">Sobota: 10:00 - 16:00</p>
                <p className="mb-8 font-light">Niedziela: Zamknięte</p>
              </div>
              <div>
                <h3 className="text-2xl font-[var(--font-cinzel)] font-semibold text-[#d4af37] mb-6">
                  Kontakt
                </h3>
                <p className="mb-2 font-light">
                  Telefon:{" "}
                  <a
                    href="tel:+48123456789"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    +48 123 456 789
                  </a>
                </p>
                <p className="font-light">
                  Email:{" "}
                  <a
                    href="mailto:kontakt@salonmeblowy.pl"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    kontakt@salonmeblowy.pl
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-[var(--font-cinzel)] font-semibold text-[#d4af37] mb-6">
                  Śledź Nas
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-full transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-[#d4af37]/70 group-hover:text-[#d4af37] transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-full transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-[#d4af37]/70 group-hover:text-[#d4af37] transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-full transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-[#d4af37]/70 group-hover:text-[#d4af37] transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 sm:px-8 lg:px-12 border-t border-[#2a2a2a] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-[var(--font-cinzel)] font-semibold text-[#d4af37] mb-4">
                Salon Meblowy
              </h3>
              <p className="text-sm text-[#d4af37]/60 font-light leading-relaxed">
                Twój partner w tworzeniu wyjątkowych wnętrz. Luksusowe meble i
                profesjonalne doradztwo.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-[var(--font-cinzel)] font-semibold text-[#d4af37] mb-4">
                Szybkie Linki
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="#oferta"
                  className="text-sm text-[#d4af37]/60 hover:text-[#d4af37] transition-colors font-light"
                >
                  Oferta
                </a>
                <a
                  href="#bestsellery"
                  className="text-sm text-[#d4af37]/60 hover:text-[#d4af37] transition-colors font-light"
                >
                  Bestsellery
                </a>
                <a
                  href="#o-nas"
                  className="text-sm text-[#d4af37]/60 hover:text-[#d4af37] transition-colors font-light"
                >
                  O nas
                </a>
                <a
                  href="#kontakt"
                  className="text-sm text-[#d4af37]/60 hover:text-[#d4af37] transition-colors font-light"
                >
                  Kontakt
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-[var(--font-cinzel)] font-semibold text-[#d4af37] mb-4">
                Social Media
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-full transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-full transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded-full transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center text-sm text-[#d4af37]/60">
            <p className="mb-4 sm:mb-0">
              © 2024 Salon Meblowy. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="hover:text-[#d4af37] transition-colors font-light"
              >
                Polityka prywatności
              </a>
              <a
                href="#"
                className="hover:text-[#d4af37] transition-colors font-light"
              >
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
