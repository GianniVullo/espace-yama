export default defineEventHandler(async () => {
    const [
      posts,
      pages,
      products
    ] = await Promise.all([
      $fetch('/api/posts'),
      $fetch('/api/pages'),
      $fetch('/api/products')
    ])
    return [...posts, ...pages, ...products].map((p) => {
      return { loc: p.url, lastmod: p.updatedAt }
    })
  })
  