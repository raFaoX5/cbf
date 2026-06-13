import Link from "next/link";
import { Button } from "./button";

export function TopbarMenu() {
  return (
    <header className="w-full h-20 flex items-center justify-between px-8 bg-gradient-to-r from-green-700 via-green-600 to-blue-800 shadow-lg">
      <div className="flex items-center gap-3">
        <img
          src="https://imgs.search.brave.com/-kRFqAkIRUQHwuPWbH2buwyluzC27t5c9bPC_v3pXzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MyL2Vj/LzJmL2MyZWMyZmZh/NzgwYWY3NDkwMjk3/MTQ2ODRlNDBhMTJi/LmpwZw"
          alt="CBF"
          className="w-12 h-12"
        />

        <Link href="/">
          <h1 className="text-3xl font-extrabold text-yellow-300">
            Seleção Brasileira
          </h1>
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        <div className="flex gap-6 text-sm font-semibold text-white">
          <Link href="/estatistica" className="hover:text-yellow-300 transition">
             Estatísticas
          </Link>

          <Link href="/jogadores" className="hover:text-yellow-300 transition">
              Jogadores
          </Link>

        </div>

        <div className="flex gap-3">
          <Link href="/login">
            <Button
              variant="outline"
              className="border-yellow-300 text-yellow-300 bg-transparent hover:bg-yellow-300 hover:text-green-900"
            >
              Login
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-yellow-400 text-green-900 font-bold hover:bg-yellow-300">
              Cadastrar-se
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}