import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Лаборатория iNeuroLab</h1>
      <p className="text-lg mb-6">Интеллект изнутри - изучаем принципы работы мозга через современные технологии</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Link href="/research" className="border p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">Исследования</h2>
          <p>Наши проекты и научные направления</p>
        </Link>
        
        <Link href="/technology" className="border p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">Технологии</h2>
          <p>Методы и инструменты исследований</p>
        </Link>
        
        <Link href="/lab-members" className="border p-6 rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">Команда</h2>
          <p>Сотрудники лаборатории</p>
        </Link>
      </div>
    </div>
  )
}