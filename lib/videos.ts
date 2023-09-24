import Papa from 'papaparse'

export async function getVideos(url: string) {
  const res = await fetch(url)
  const textData = await res.text()

  const parsedData = await Papa.parse(textData, { header: true })

  const renamedData = parsedData.data.map(
    (item: any): Video => ({
      date: item.Fecha as string,
      title: item.Nombre as string,
      url: item.Link as string,
    }),
  )

  return renamedData
}
