import Papa from 'papaparse'

const sheetURL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_cSj5V674gGXp_71tkLINgKzUrrOh35CZkpPiSyW-0gbYMTG-TEC3x8cuZLuuyGg64Rs7FFABlA2h/pub?gid=0&output=csv'

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
