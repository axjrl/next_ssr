export type Pokemon = {
    sprites: {
        front_default: string
    }
    url: string
    name: string
    stats: [
        {
            base_stat: number
        }
    ],
    id: number
}