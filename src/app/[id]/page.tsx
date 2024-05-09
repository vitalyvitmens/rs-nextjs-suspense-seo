//! 9. Suspense. Серверные компоненты.
//! Когда Вам важно SEO. Для запуска открой http://localhost:8080/1
//! Страницы есть от 1 до 6
//! React RFCs: https://github.com/reactjs/rfcs
//! Подробнее о серверных компонентах: https://nextjs.org/docs/getting-started/react-essentials#server-components

interface Params {
  id: string
}

export default async function Home({ params }: { params: Params }) {
  const res = await fetch(`https://www.swapi.tech/api/films/${params.id}`)
  const data = await res.json()

  return <div>{data.result.properties.title}</div>
}
