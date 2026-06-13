export default function Nova() {
  const artilheiros = [
    { nome: "Neymar", gols: 79, jogos: 128 },
    { nome: "Pelé", gols: 77, jogos: 92 },
    { nome: "Ronaldo", gols: 62, jogos: 98 },
    { nome: "Romário", gols: 55, jogos: 70 },
    { nome: "Zico", gols: 48, jogos: 71 },
    { nome: "Bebeto", gols: 39, jogos: 75 },
    { nome: "Rivaldo", gols: 35, jogos: 74 },
    { nome: "Jairzinho", gols: 33, jogos: 81 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-500 via-yellow-300 to-blue-500 p-8">
      <h1 className="text-5xl font-bold text-center text-white mb-10">
        ⚽ Maiores Artilheiros da Seleção Brasileira 🇧🇷
      </h1>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-4">Posição</th>
              <th className="p-4">Jogador</th>
              <th className="p-4">Gols</th>
              <th className="p-4">Jogos</th>
              <th className="p-4">Média</th>
            </tr>
          </thead>

          <tbody>
            {artilheiros.map((jogador, index) => (
              <tr
                key={jogador.nome}
                className="border-b hover:bg-yellow-50 transition"
              >
                <td className="p-4 text-center font-bold">
                  {index + 1}º
                </td>

                <td className="p-4 font-semibold">
                  {jogador.nome}
                </td>

                <td className="p-4 text-center text-green-700 font-bold">
                  {jogador.gols}
                </td>

                <td className="p-4 text-center">
                  {jogador.jogos}
                </td>

                <td className="p-4 text-center">
                  {(jogador.gols / jogador.jogos).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Ranking por Gols
        </h2>

        {artilheiros.map((jogador) => (
          <div key={jogador.nome} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{jogador.nome}</span>
              <span>{jogador.gols} gols</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-600 h-4 rounded-full"
                style={{
                  width: `${(jogador.gols / 79) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}