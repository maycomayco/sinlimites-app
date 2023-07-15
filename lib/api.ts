import { getRaces } from './races'
import { getAll } from './links'

const api = {
  races: {
    fetch: async (from: string) => await getRaces(from),
  },
  links: {
    getAll: async () => await getAll(),
  },
}

export default api
