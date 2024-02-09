import { Avatar } from '@/components/avatar'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react/dist/ssr'

export function UserDataMenu() {
  return (
    <aside className="flex w-96 flex-col items-center gap-8 border-l border-gray-700">
      <div className="flex flex-col items-center gap-5">
        <Avatar size={72} source="https://github.com/joaoguibc.png" />

        <div className="flex flex-col items-center">
          <p className="text-xl/[140%] font-bold text-gray-100">
            João Guilherme
          </p>
          <p className="text-sm/[160%] text-gray-400">Membro desde 2023</p>
        </div>
      </div>

      <div className="h-1 w-8 rounded-full bg-gradient-horizontal" />

      <div className="flex w-full flex-col gap-10 px-14 py-5">
        <div className="flex gap-5">
          <BookOpen className="h-8 w-8 text-green-100" />

          <div className="flex flex-col">
            <span className="text-base/[140%] font-bold text-gray-200">
              3853
            </span>
            <span className="text-sm/[160%] text-gray-300">Páginas lidas</span>
          </div>
        </div>

        <div className="flex gap-5">
          <Books className="h-8 w-8 text-green-100" />

          <div className="flex flex-col">
            <span className="text-base/[140%] font-bold text-gray-200">10</span>
            <span className="text-sm/[160%] text-gray-300">
              Livros avaliados
            </span>
          </div>
        </div>
        <div className="flex gap-5">
          <UserList className="h-8 w-8 text-green-100" />

          <div className="flex flex-col">
            <span className="text-base/[140%] font-bold text-gray-200">8</span>
            <span className="text-sm/[160%] text-gray-300">Autores lidos</span>
          </div>
        </div>
        <div className="flex gap-5">
          <BookmarkSimple className="h-8 w-8 text-green-100" />

          <div className="flex flex-col">
            <span className="text-base/[140%] font-bold text-gray-200">
              Terror
            </span>
            <span className="text-sm/[160%] text-gray-300">
              Categoria mais lida
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
