import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'obecq1jz',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skTQqk8QQghFXFmqQKiLie6DZwjb1OYG2B5yY0WQ7Logw08sPZNEmbjJEV8SGHhklMmBuhaNp2EltzeNgQvjFfBe8YofasdqNpGA8k5CVlvZIIPKybw4w5h58gdIrBZyWbChoPD7fdPO7ecjfVhgz0DjCuKTKLBCS772TVODu7xmnbVVZUdB'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)