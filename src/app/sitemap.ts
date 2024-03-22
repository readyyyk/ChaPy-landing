import { type MetadataRoute } from 'next';

import { HOST } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: HOST,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];
}
