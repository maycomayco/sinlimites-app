import Papa from 'papaparse'

export async function getRaces(url: string) {
  const res = await fetch(url)
  const textData = await res.text()

  const parsedData = await Papa.parse(textData, { header: true })

  const renamedData = parsedData.data.map(
    (item: any): Race => ({
      date: item.Fecha as string,
      name: item.Nombre as string,
      discountCode: item.Codigo as string,
      imageUrl: item.Imagen as string,
      url: item.Link as string,
    }),
  )

  return renamedData
}
