import { notFound } from 'next/navigation'

import api from '@/lib/api'

type VideoBoxProps = { title: string; date: string; url: string }

function VideoBox({ title, date, url }: VideoBoxProps) {
  return (
    <div className="mb-4 rounded-2xl border-2 border-solid border-black bg-white px-10 py-5 text-black">
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">{title}</h5>
      </a>
      <p className="mb-3 font-normal">{date}</p>
      <a
        className="inline-flex items-center text-red-600 hover:underline"
        href={url}
      >
        VIDEO
        <svg
          aria-hidden="true"
          className="ml-2.5 h-3 w-3"
          fill="none"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </a>
    </div>
  )
}

const pageSlug = 'videos'

async function videosPage() {
  const links = await api.links.getAll()

  const filteredLinks = links.filter(
    (link) => link.title.toLowerCase() === pageSlug,
  )

  if (filteredLinks.length === 0) return notFound()

  const videos = await api.videos.getAll(filteredLinks[0].link)

  return (
    <main>
      <h2 className="mb-4 text-2xl font-bold">Ultimos videos</h2>
      {videos.map((video, idx) => (
        <VideoBox key={idx} {...video} />
      ))}
    </main>
  )
}

export default videosPage
