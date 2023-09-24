import { getRaces, getRaceBySlug } from './races'
import { getAll } from './links'
import { getVideos } from './videos'

const api = {
  races: {
    getAll: async (from: string) => await getRaces(from),
    getBySlug: async (slug: string) => await getRaceBySlug(slug),
  },
  links: {
    getAll: async () => await getAll(),
  },
  videos: {
    getAll: async (from: string) => await getVideos(from),
  },
}

export default api
