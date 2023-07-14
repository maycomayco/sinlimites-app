import { getLinks } from './races'
import { getAll } from './links'

const api = {
  races: {
    fetch: async (from: string) => await getLinks(from),
  },
  links: {
    getAll: async () => await getAll(),
  },
}

export default api
