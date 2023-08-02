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
      slug: item.Slug as string,
      description: item.Descripcion as string,
      place: item.Lugar as string,
      distance: item.Distancia as string,
    }),
  )

  return renamedData
}

export async function getRaceBySlug(slug: string) {
  const races = await getRaces(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_cSj5V674gGXp_71tkLINgKzUrrOh35CZkpPiSyW-0gbYMTG-TEC3x8cuZLuuyGg64Rs7FFABlA2h/pub?gid=564489709&single=true&output=csv',
  )

  const filteredRace = races.filter((race) => race.slug === slug)

  return filteredRace[0]
}
