import Papa from 'papaparse'

const sheetURL = process.env.GOOGLE_SHEET_URL as string

export async function getAll() {
  const res = await fetch(sheetURL)
  const textData = await res.text()

  const parsedData = await Papa.parse(textData, {
    header: true,
  })

  const renamedData = parsedData.data.map(
    (item: any): Link => ({
      title: item.Titulo as string,
      link: item.Link as string,
    }),
  )

  return renamedData
}
