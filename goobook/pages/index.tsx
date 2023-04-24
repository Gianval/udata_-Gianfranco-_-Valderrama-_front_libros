import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-3xl font-bold font-sans text-gray-800 tracking-wide mb-8">
        GOOBOOK - VENTA DE LIBROS
      </h1>
      <div className="flex">
        <input
          type="text"
          className="border border-gray-400 py-2 px-4 rounded-l"
          placeholder="¿Qué libro Buscas?"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
          Buscar
        </button>
      </div>
    </main>
  )
}
