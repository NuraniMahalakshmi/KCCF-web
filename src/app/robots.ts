import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const isStaging = process.env.NEXT_PUBLIC_SITE_ENV === 'staging' ||
  (process.env.NEXT_PUBLIC_SITE_URL && /staging\./i.test(process.env.NEXT_PUBLIC_SITE_URL))

export default function robots(): MetadataRoute.Robots {
  if (isStaging) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/thank-you/'],
    },
    sitemap: 'https://thekccf.org/sitemap.xml',
  }
}
