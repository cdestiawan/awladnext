export type ProductImage = {
    id: number
    url: string
    alt?: string
}

export type Product = {
    id: number
    name: string
    price: number
    slug: string
    images?: ProductImage[]
}