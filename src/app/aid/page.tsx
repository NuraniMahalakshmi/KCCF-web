"use client"

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';

export default function Aid() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex justify-center overflow-hidden pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_family_assistance.jpg"
            alt="Family Assistance"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* PageHeader */}
        <PageHeader
          title="Family Assistance"
          subtitle="Let us ease your financial burden during your family's time of need."
          headerStyle="pt-92 sm:pt-100 2xl:pt-92 lg:pl-24"
          gridStyle="gap-0 lg:grid-cols-1"
        />
      </div>

      {/* About Our Aid Program */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
          <div className="card-static border border-gray-100 bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <p className="italic text-lg leading-relaxed mb-4 text-violet-600">
              "When I was going through cancer treatment,{' '}
              <span className="font-semibold">
                all I wanted was to have my parents by my side
              </span>{' '}
              and they wanted the same. <br />
              <br />
              <span className="font-semibold">
                They put their lives on hold to be with me.
              </span>{' '}
              For most families, that means stepping away from jobs, bills, and
              daily responsibilities.
              <br />
              <br /> But the bills still come. That’s why we offer financial
              assistance to families of children with cancer so they can{' '}
              <span className="font-semibold">
                focus on what matters most: healing.
              </span>
              "
            </p>
            <p className="text-right text-lg text-violet-600 font-semibold">
              — Elana, founder & childhood cancer survivor
              {/* —  Emanuel, 20xx-202xx */}
            </p>
          </div>
          <div className="pt-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-violet-600 dark:text-white w-100% text-center">
              Financial Assistance
            </h2>
            <div className="prose prose-lg max-w-none text-violet-700 flex flex-col lg:grid lg:grid-cols-2 gap-8">
              <div className="card-static border border-gray-100 bg-white rounded-xl shadow-2xl p-8 md:p-12">
                <div className="p-4 w-fit mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
                  {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-violet-700 mb-4 w-100% text-center">
                  Covered Expenses
                </h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    Medical treatments or medications not covered by insurance
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    Travel costs for care
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    Rent or mortgage payments
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    And more
                  </li>
                </ul>
              </div>

              <div className="card-static border border-gray-100 bg-white rounded-xl shadow-2xl p-8 md:p-12">
                <div className="p-4 w-fit mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
                  {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M224 128a8 8 0 0 1-8 8h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8m-96-56h88a8 8 0 0 0 0-16h-88a8 8 0 0 0 0 16m88 112h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M82.34 42.34L56 68.69L45.66 58.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 64L56 132.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 64L56 196.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-violet-700 mb-4 w-100% text-center">
                  Eligibility Requirements
                </h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    Child must be under the age of 21 and diagnosed with cancer
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    Expenses must be directly related to the child’s diagnosis
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    Child must be receiving treatment at a credentialed hospital
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    The application must be fully completed by both the family
                    and the social worker
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2">•</span>
                    Funds are paid directly to creditors or service providers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Family Completes Part 1</h3>
              <p className="text-violet-600">
                Qualified families fill out their part of the application.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-saffron-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Email Confirmation</h3>
              <p className="text-violet-600">
                Once complete, the family will receive an email confirming completion of part 1, and the social worker listed on the application will automatically receive part 2 via email.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-fandango-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Social Worker Completes Part 2</h3>
              <p className="text-violet-600">
                Once part 1 is completed by the family and part 2 is completed by the social worker, both parties will receive confirmation of completion.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Board Review</h3>
              <p className="text-violet-600">
                The board will review the complete application for a decision.
              </p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-red-50 border-l-4 border-red-500 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-lg font-bold text-red-700 text-center">
              *APPLICATIONS WILL NOT BE CONSIDERED UNTIL BOTH PARTS ARE COMPLETE*
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-violet-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Apply for Family Assistance</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-violet-700 mb-4">Start Your Application</h3>
            <p className="text-lg text-violet-600 mb-8 max-w-2xl mx-auto">
              Complete our comprehensive application form to apply for family assistance during your child's cancer treatment. All information will be kept confidential.
            </p>
            
            <FormButton
              formType="aid-application"
              variant="violet"
              size="lg"
              className="min-w-[250px]"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            >
              Family Assistance
            </FormButton>
            
          </div>
        </div>
      </section>
    </div>
  )
}
