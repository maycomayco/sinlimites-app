import Papa from 'papaparse'

export async function getLinks(url: string) {
  const res = await fetch(url)
  const textData = await res.text()

  const parsedData = await Papa.parse<Link>(textData, { header: true })

  return parsedData.data
}
