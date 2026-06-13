import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg p-8 m-8">
        <section className="gap-6 items-center">
          <div className="mb-8 flex gap-8 flex-col">
            <h2 className={`text-4xl`}>
            Acompanhe a história e os números da Seleção Brasileira
            </h2>
          </div>

          <div className="flex flex-row justify-between p-6 ">
            <div className="flex flex-col gap-15">
              <p className="text-gray-500 max-w-md">
                Explore títulos, jogadores históricos, estatísticas e momentos marcantes da maior seleção de futebol do mundo.
              </p>

              <div className="flex gap-3">
                <Link href={"/jogadores"}>
                  <Button className="rounded-full bg-blue-400 hover:bg-blue-500">
                    Jogadores
                  </Button>
                </Link>

                <Link href={"/estatistica"}>
                  <Button
                    variant="outline"
                    className=" text-blue-400"
                  >
                    Estatísticas
                  </Button>
                </Link>
              </div>
            </div>

           
          </div>
        </section>

        <hr />

       <section>
  <h3
    className={`text-2xl font-medium flex justify-center mb-8 mt-4`}
  >
    Dados da Seleção Brasileira
  </h3>

  <div className="flex justify-evenly gap-4">
    <div className="bg-green-700 text-white p-3  rounded-1xl text-center">
      <p className="font-medium">Copas do Mundo</p>
      <p className="text-sm text-gray-200">5 títulos</p>
    </div>

    <div className="bg-green-700 text-white p-3 rounded-1xl text-center">
      <p className="font-medium">Maior Artilheiro</p>
      <p className="text-sm text-gray-200">Neymar</p>
    </div>

    <div className="bg-green-700 text-white p-3  rounded-1xl text-center">
      <p className="font-medium">Estádio Marcante</p>
      <p className="text-sm text-gray-200">Maracanã</p>
    </div>

    <div className="bg-green-700 text-white p-3  rounded-1xl text-center">
      <p className="font-medium">Fundação</p>
      <p className="text-sm text-gray-200">1914</p>
    </div>
  </div>
</section>

<section className="flex justify-evenly gap-4 mt-20 mb-8">
  <div className="p-5 rounded-2xl border">
    <p className="font-semibold">Jogadores</p>
    <p className="text-sm text-gray-700">
      Conheça os grandes nomes da Seleção Brasileira
    </p>
  </div>

  <div className="p-5 rounded-2xl border">
    <p className="font-semibold">História</p>
    <p className="text-sm text-gray-700">
      Reviva os principais momentos e conquistas
    </p>
  </div>
</section>

        <hr />

       <section className="flex flex-row justify-evenly p-8 items-center">
  <div className="max-w-xl">
    <h3 className="text-3xl font-bold mb-4 text-blue-700">
      História da Seleção Brasileira 🇧🇷
    </h3>

    <p className="text-gray-600">
      A Seleção Brasileira é a maior vencedora da Copa do Mundo,
      com 5 títulos conquistados em 1958, 1962, 1970, 1994 e 2002.
      Ao longo da história, craques como Pelé, Garrincha, Zico,
      Romário, Ronaldo e Neymar marcaram gerações e fizeram do
      Brasil uma referência mundial no futebol.
    </p>

    <ul className="mt-5 text-sm space-y-2">
      <li>🏆 5 títulos mundiais</li>
      <li>⚽ Maior número de participações em Copas</li>
      <li>🌟 Berço de lendas do futebol</li>
      <li>🇧🇷 Tradição e paixão pelo esporte</li>
    </ul>
  </div>

  <img
    src="https://imgs.search.brave.com/dHbhhi-6CbFxAB-RRfWpgT_omwiz33CLIKTfB8DciCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ29hbC5jb20v/aW1hZ2VzL3YzL2Js/dDQ1YWYxODMzMzk3/YzcxYTIvN2Q5YjA0/ODAzYWQ2MGRhYjcz/MjkxNzJmNTk3NTdl/OGM4OTYwZjc2Yy5q/cGc_YXV0bz13ZWJw/JmZvcm1hdD1wanBn/JndpZHRoPTM4NDAm/cXVhbGl0eT02MA"
    alt="Seleção Brasileira"
    className="rounded-xl shadow-xl w-[450px]"
  />
</section>
        <hr />

        <footer className="flex justify-center text-sm text-gray-500 pt-6 ">
          <p>© 2026 Portal Seleção Brasileira 🇧🇷</p>
        </footer>
      </div>
    </main>
  );
}
