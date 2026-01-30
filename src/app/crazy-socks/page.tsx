'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';
import { IMPACT_STATS } from '@/constants/impactStats';

export default function CrazySocks() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }, // 50% of video must be visible for autoplay
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_crazy_socks.jpg"
            alt="Crazy Socks Gift Bags"
            fill
            className="object-cover object-[45%_center] sm:object-[70%_center] lg:object-[90%_center] 2xl:object-[center_30%]"
            sizes="100vw"
            priority
          />
        </div>

        {/* PageHeader */}
        <PageHeader
          title="Crazy Socks Gift Bags"
          subtitle="Sponsor gift bag–making event for hospitalized children."
        />
      </div>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <FormButton
                  formType="crazy-socks-sponsor"
                  variant="violet"
                  size="md"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  }
                >
                  Sponsor Gift Bag Event
                </FormButton>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-violet-600 dark:text-white">
                Why Crazy Socks Gift Bags?
              </h2>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>
                  Crazy Socks Gift Bag is KCCF's signature project, inspired by founder Elana's personal journey with cancer at the age of 7. While battling Ewing's sarcoma, a rare and aggressive bone cancer, Elana was struck by how the dull hospital socks mirrored the monotony and sadness of her days.
                </p>
                <p>
                  The moment she got home, she would pull them off and throw them away, hoping to leave behind the needles, pain, and fear. She was determined to change that experience for other children fighting cancer.
                </p>
                <p className="text-xl font-semibold text-[#732154] dark:text-saffron-400">
                  To date, more than {IMPACT_STATS.CRAZY_SOCKS[0].value.toLowerCase()} gift bags, containing over {IMPACT_STATS.CRAZY_SOCKS[1].value.toLowerCase()} items, have been delivered to hospitalized children across the United States and around the world.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-violet-500/40 to-violet-500/50 dark:from-violet-500/60 dark:to-violet-500/70 p-8 rounded-3xl shadow-2xl">
                <Image
                  src="/images/crazy-socks.jpg"
                  alt="Crazy Socks Gift Bags"
                  width={500}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Our Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {IMPACT_STATS.CRAZY_SOCKS.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl font-bold text-[#732154] dark:text-saffron-400 mb-4">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-200 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className='py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white'>
              Event Showcase
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              See the joy and impact of our Crazy Socks Gift Bag events in
              action.
            </p>
          </div>
          <div className='mb-6'>
            <video
              ref={videoRef}
              controls
              autoPlay
              muted
              loop
              className='w-auto h-auto max-h-[75vh] mx-auto rounded-2xl shadow-lg'
            >
              <source src='/videos/Crazy-Socks-Video.mp4' type='video/mp4' />
              Your browser doesn't support video.
            </video>
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Corporate Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We bring the fun event to you! Leading companies partner with us through employee volunteering, team-building events, and corporate social responsibility programs. Together, we make a meaningful difference in the lives of children battling cancer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Meta Leadership */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/MetaLeadershipMakingfitBags-scaled.jpg"
                    alt="Meta Leadership"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Meta Leadership</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Elana, teen founder presents!</p>
            </div>

            {/* Bank of America */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/bankofamerica-scaled.jpeg"
                    alt="Bank of America"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Bank of America</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">You make a difference!</p>
            </div>

            {/* Aflac Global Investments */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20"></div>
                  <Image
                    src="/images/AlfacGiftMakingEvent-scaled.jpeg"
                    alt="Aflac Global Investments"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Aflac Global Investments</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Hospitalized kids love it!</p>
            </div>

            {/* Forvis Mazars Group */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/giftbagevent2-scaled.jpeg"
                    alt="Forvis Mazars Group"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Forvis Mazars Group</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Making a difference together!</p>
            </div>

            {/* Elana and Olivia */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/sumitomo-csr.jpg"
                    alt="Sumitomo Mitsui Bank CSR Event"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Sumitomo Mitsui Bank</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">CSR Event</p>
            </div>

            {/* Meta CS Gift Bag Event */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20"></div>
                  <Image
                    src="/images/ubs-season-of-service.png"
                    alt="UBS Season of Service"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">UBS</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Season of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Form Section */}
      <section className="py-20 bg-violet-600 dark:bg-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Sponsor Gift Bag Event
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-gray-900 text-center">
              <p className="text-lg text-gray-700 mb-8">
                Ready to make a difference? Partner with us to sponsor a gift bag event and bring joy to hospitalized children.
              </p>

              <FormButton
                formType="crazy-socks-sponsor"
                variant="violet"
                size="lg"
                className="min-w-[250px]"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                }
              >
                Sponsor Gift Bag Event
              </FormButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
