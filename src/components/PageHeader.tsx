'use client'

import React from 'react'
import Image from 'next/image'

interface PageHeaderProps {
  title: string
  subtitle?: string
  image?: string
  childrenRight?: React.ReactNode
  button?: React.ReactNode
  headerStyle?: string
  gridStyle?: string
}
export default function PageHeader({
  title,
  subtitle,
  image,
  childrenRight,
  button,
  headerStyle,
  gridStyle,
}: PageHeaderProps) {
  return (
    <header className={`relative w-full max-w-screen-2xl mx-auto px-4 py-12 ${headerStyle || ''}`}>
      <div className={`grid grid-cols-1 lg:items-start ${gridStyle || 'gap-8 lg:grid-cols-2'}`}>
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          {image && (
            <Image
              src={image}
              alt=""
              width={800}
              height={600}
              className="rounded-xl w-full object-cover mb-6"
              priority
            />
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-white/90 text-lg md:text-xl font-semibold leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,1)] max-w-[42ch] break-words">
              {subtitle}
            </p>
          )}
          {button && (
            <div>
              {button}
            </div>
          )}
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex justify-center lg:justify-end lg:place-self-end">
          {childrenRight && (
            <div className="w-full max-w-md">
              {childrenRight}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
