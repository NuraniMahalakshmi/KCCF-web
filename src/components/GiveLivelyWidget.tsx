"use client"

import { useEffect, useRef, useState } from 'react'

export default function GiveLivelyWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)
  const [isLoading, setIsLoading] = useState(true)
  
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
    
    // Set a timeout to hide loading spinner after 5 seconds regardless
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    
    gl.onload = () => {
      clearTimeout(loadingTimeout)
      setIsLoading(false)
    }
    
    gl.onerror = () => {
      clearTimeout(loadingTimeout)
      setIsLoading(false)
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
          '.gl-modal, .gl-simple-donation-widget > *'
        )
        glElements.forEach((element) => {
          if (element && element.parentNode && element !== container) {
            element.remove()
          }
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
      
      // Clear the container
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])
  
  return (
    <div className="w-full min-h-[600px] bg-white flex flex-col">
      {isLoading && (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading donation form...</p>
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

