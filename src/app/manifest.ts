import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Tugrul Subekci - Portfolio',
        short_name: 'Tugrul Subekci',
        description: 'Developer portfolio - experience, projects, and contact information',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait-primary',
        theme_color: '#000000',
        background_color: '#ffffff',
        icons: [
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icons/icon-maskable-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icons/icon-maskable-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        screenshots: [
            {
                src: '/screenshots/screenshot-1.png',
                sizes: '540x720',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/screenshots/screenshot-2.png',
                sizes: '1280x720',
                type: 'image/png',
                form_factor: 'wide',
            },
        ],
        categories: ['productivity'],
        shortcuts: [
            {
                name: 'View Projects',
                short_name: 'Projects',
                description: 'View my recent projects',
                url: '/#projects',
                icons: [
                    {
                        src: '/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                ],
            },
            {
                name: 'Contact Me',
                short_name: 'Contact',
                description: 'Get in touch with Tugrul',
                url: '/#contact',
                icons: [
                    {
                        src: '/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                ],
            },
        ],
    }
}
