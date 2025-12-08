import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://beginos.co',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Add other routes here as they are created, e.g. /about, /features
    ]
}
