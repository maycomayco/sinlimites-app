import { getRaces, getRaceBySlug } from './races'
import { getAll } from './links'

const api = {
  races: {
    getAll: async (from: string) => await getRaces(from),
    getBySlug: async (slug: string) => await getRaceBySlug(slug),
  },
  links: {
    getAll: async () => await getAll(),
  },
}

export default api
