import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/private/'], // Add any private paths
        },
        sitemap: 'https://beginos.co/sitemap.xml',
    }
}
