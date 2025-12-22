"use client"

import { useEffect, useRef, useState } from 'react'

const WIDGET_LOADING_TIMEOUT_MS = 5000 // 5 seconds

export default function GiveLivelyWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  useEffect(() => {
    // Prevent double loading in development mode with strict mode
    if (scriptLoadedRef.current) return
    scriptLoadedRef.current = true
    
    const container = containerRef.current
    if (!container) return
    
    // Create and load the script
    const gl = document.createElement('script')
    gl.src =
      'https://secure.givelively.org/widgets/simple_donation/koenig-childhood-cancer-foundation.js?show_suggested_amount_buttons=true&show_in_honor_of=false&address_required=false&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250'
    gl.async = true
    gl.referrerPolicy = 'strict-origin-when-cross-origin'
    
    // Set a timeout to hide loading spinner after timeout regardless
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
      // If still loading after timeout, check if widget loaded successfully
      // Look for actual GiveLively widget content, not just any element
      const widgetContent = container.querySelector('[class*="gl-"], .givelively-widget')
      if (!widgetContent || !widgetContent.children.length) {
        setHasError(true)
        console.error('GiveLively widget failed to load within timeout period')
      }
    }, WIDGET_LOADING_TIMEOUT_MS)
    
    gl.onload = () => {
      clearTimeout(loadingTimeout)
      setIsLoading(false)
    }
    
    gl.onerror = () => {
      clearTimeout(loadingTimeout)
      setIsLoading(false)
      setHasError(true)
      console.error('Failed to load GiveLively widget script')
    }
    
    document.body.appendChild(gl)
    
    // Cleanup function
    return () => {
      clearTimeout(loadingTimeout)
      scriptLoadedRef.current = false
      
      // Remove the widget modal if it exists
      try {
        const glModal = document.getElementById('gl-widget-modal')
        glModal?.remove()
      } catch {
        // Silently fail
      }

      // Remove any widget elements that were injected
      try {
        const glElements = document.querySelectorAll(
          '.gl-modal'
        )
        glElements.forEach((element) => {
          element.remove()
        })
      } catch {
        // Silently fail
      }
      
      // Remove the script
      try {
        gl.remove()
      } catch {
        // Silently fail
      }
      
      // Clear the container using replaceChildren for proper cleanup
      if (container) {
        container.replaceChildren()
      }
    }
  }, [])
  
  return (
    <div className="w-full min-h-[600px] bg-white flex flex-col relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-violet-600 mx-auto mb-4"></div>
            <p className="text-lg font-medium text-gray-700">Loading donation form...</p>
            <p className="text-sm text-gray-500 mt-2">Please wait while we prepare the form</p>
          </div>
        </div>
      )}
      {!isLoading && hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center max-w-md px-4">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Donation Form</h3>
            <p className="text-gray-600 mb-4">
              We're having trouble loading the GiveLively donation form. This could be due to network issues or browser security settings.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Please try switching to Zeffy (no fees!) or refresh the page.
            </p>
            <p className="text-xs text-gray-400">
              If the problem persists, contact us at{' '}
              <a href="mailto:join@thekccf.org" className="text-violet-600 hover:text-violet-700 font-medium">
                join@thekccf.org
              </a>
            </p>
          </div>
        </div>
      )}
      <div 
        ref={containerRef}
        id="give-lively-widget" 
        className="gl-simple-donation-widget w-full flex-1"
      >
      </div>
    </div>
  )
}

