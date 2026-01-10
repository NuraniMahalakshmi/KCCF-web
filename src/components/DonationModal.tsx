"use client"

import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { useDonationModal } from '@/contexts/DonationModalContext'

type DonationProvider = 'zeffy' | 'givelively'

// GiveLively widget component that loads the donation form via script
// Uses a ref callback to create a container that React won't try to manage
function GiveLivelyWidget() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widgetContainerRef = useRef<HTMLDivElement | null>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const isMountedRef = useRef(true)
  
  useEffect(() => {
    isMountedRef.current = true
    
    if (!wrapperRef.current) return
    
    // Create the widget container manually (outside React's control)
    const widgetContainer = document.createElement('div')
    widgetContainer.id = 'give-lively-widget'
    widgetContainer.className = 'gl-simple-donation-widget'
    wrapperRef.current.appendChild(widgetContainer)
    widgetContainerRef.current = widgetContainer
    
    // Create and load the GiveLively script
    const gl = document.createElement('script')
    gl.src = 'https://secure.givelively.org/widgets/simple_donation/koenig-childhood-cancer-foundation.js?show_suggested_amount_buttons=true&show_in_honor_of=true&address_required=false&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250'
    scriptRef.current = gl
    document.head.appendChild(gl)
    
    return () => {
      isMountedRef.current = false
      
      // Clean up GiveLively modal element from body
      const glModal = document.getElementById('gl-widget-modal')
      if (glModal) {
        glModal.remove()
      }
      
      // Clean up any other GiveLively elements added to body
      document.querySelectorAll('body > .gl-modal').forEach(el => el.remove())
      
      // Clean up script from head
      if (scriptRef.current) {
        scriptRef.current.remove()
        scriptRef.current = null
      }
      
      // Clean up our manually created widget container from wrapper
      if (widgetContainerRef.current && wrapperRef.current) {
        // Clear the widget container's content first
        widgetContainerRef.current.innerHTML = ''
        // Then remove the container from wrapper
        if (wrapperRef.current.contains(widgetContainerRef.current)) {
          wrapperRef.current.removeChild(widgetContainerRef.current)
        }
        widgetContainerRef.current = null
      }
    }
  }, [])
  
  return (
    <div 
      ref={wrapperRef}
      className="h-full min-h-0 overflow-auto p-4 bg-white rounded-b-2xl"
    >
      {/* GiveLively widget container is created via DOM API, not React */}
    </div>
  )
}

export default function DonationModal() {
  const { isOpen, closeModal, campaign } = useDonationModal()
  const [selectedProvider, setSelectedProvider] = useState<DonationProvider>('zeffy')

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeModal])

  // All previous step handlers removed

  if (!isOpen) return null

  // Stripe CardPaymentSection removed; using GiveLively iframe

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 overflow-x-hidden overflow-y-auto"
         style={{ WebkitOverflowScrolling: 'touch' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative rounded-t-2xl sm:rounded-3xl max-w-5xl w-full h-[100dvh] sm:h-[75vh] md:h-[70vh] lg:h-[65vh] min-[1800px]:h-[55vh] overflow-hidden flex items-stretch gap-4"
           style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* Campaign Card - Left Side */}
         <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#732154] to-violet-600 text-white flex-col justify-between rounded-2xl overflow-hidden">
          <div>
            <div className="campaign-image-holder">
              <Image 
                className="w-full h-72 object-cover"
                src="/images/ElanaOliviaGiftBags-scaled.jpg"
                alt="Elana and Olivia preparing gift bags"
                width="516"
                height="288"
              />
            </div>
            
            <div className="campaign-body p-8 pt-6">
              <h2 className="text-2xl font-bold mb-4">
                {campaign || "Help hospitalized children with cancer"}
              </h2>
              <p className="text-white/90 leading-relaxed">
                Your donation helps provide support and resources to hospitalized children battling cancer. 
                Your generosity brings joy, comfort, and hope to children during their difficult hospital stays. 
                Every donation makes a real difference in a child's life.
              </p>
            </div>
          </div>
          
          <div className="mx-8 mb-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-between text-sm text-white/80">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tax Deductible</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/donate"
                onClick={closeModal}
                className="inline-flex items-center text-sm text-white/90 hover:text-white underline underline-offset-2 transition-colors"
              >
                Other ways to donate
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Donation Form - Right Side replaced entirely by Zeffy */}
        <div className="lg:w-1/2 w-full flex flex-col min-h-0 h-full bg-white dark:bg-gray-800 rounded-t-2xl sm:rounded-2xl overflow-hidden">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Donate to save lives ❤️</h2>
                {campaign && (
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Campaign: {campaign}</p>
                )}
              </div>
              <button
                onClick={closeModal}
                className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors hover:cursor-pointer"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            {/* Zeffy/GiveLively donation forms are loaded as strictly necessary services */}
            {/* Provider Selection */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <p className="text-xs sm:text-sm text-gray-900 dark:text-white mb-2 sm:mb-3 text-center">Choose your preferred donation platform:</p>
              <div className="flex justify-center space-x-3 sm:space-x-4">
                 <div className="flex flex-col">
                   <button
                     onClick={() => setSelectedProvider('zeffy')}
                     className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer border-2 ${
                       selectedProvider === 'zeffy'
                         ? 'bg-[#732154] text-white hover:bg-[#732154]/90 border-[#732154]'
                         : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border-[#732154]'
                     }`}
                   >
                     Zeffy
                   </button>
                   <ul className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 list-disc list-inside">
                     <li>No fees</li>
                     <li>Accepts international donations</li>
                   </ul>
                 </div>
                 <div className="flex flex-col">
                   <button
                     onClick={() => setSelectedProvider('givelively')}
                     className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer border-2 ${
                       selectedProvider === 'givelively'
                         ? 'bg-[#732154] text-white hover:bg-[#732154]/90 border-[#732154]'
                         : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border-[#732154]'
                     }`}
                   >
                     GiveLively
                   </button>
                   <ul className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 list-disc list-inside">
                     <li>Standard processing fees</li>
                     <li>Accepts PayPal / Venmo / DAFs</li>
                   </ul>
                 </div>
              </div>
            </div>
            
            {selectedProvider === 'zeffy' ? (
              <div className="flex-1 min-h-0 overflow-auto">
                <iframe
                  className="block w-full h-full max-w-full border-0"
                  src="https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649"
                  title="Zeffy donation form"
                  scrolling="yes"
                  allow="payment"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  style={{
                    WebkitOverflowScrolling: 'touch',
                    overflow: 'auto',
                    minHeight: '300px',
                    height: '100%'
                  }}
                />
              </div>
            ) : (
              <div className="flex-1 min-h-0">
                <GiveLivelyWidget />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  // Use portal to render modal outside of normal DOM hierarchy
  return createPortal(modalContent, document.body)
}
