export default function Ver() {
  const copas = [
    {
      ano: 1958,
      jogadores: [
        "Gilmar",
        "Djalma Santos",
        "Bellini",
        "Orlando",
        "Nilton Santos",
        "Zito",
        "Didi",
        "Garrincha",
        "Vavá",
        "Pelé",
        "Mário Zagallo",
      ],
    },
    {
      ano: 1962,
      jogadores: [
        "Gilmar",
        "Djalma Santos",
        "Mauro",
        "Zózimo",
        "Nilton Santos",
        "Zito",
        "Didi",
        "Garrincha",
        "Vavá",
        "Amarildo",
        "Zagallo",
      ],
    },
    {
      ano: 1970,
      jogadores: [
        "Félix",
        "Carlos Alberto",
        "Brito",
        "Piazza",
        "Everaldo",
        "Clodoaldo",
        "Gerson",
        "Jairzinho",
        "Pelé",
        "Tostão",
        "Rivelino",
      ],
    },
    {
      ano: 1994,
      jogadores: [
        "Taffarel",
        "Jorginho",
        "Aldair",
        "Márcio Santos",
        "Branco",
        "Mauro Silva",
        "Dunga",
        "Mazinho",
        "Zinho",
        "Romário",
        "Bebeto",
      ],
    },
    {
      ano: 2002,
      jogadores: [
        "Marcos",
        "Cafu",
        "Lúcio",
        "Roque Júnior",
        "Roberto Carlos",
        "Gilberto Silva",
        "Kléberson",
        "Ronaldinho",
        "Rivaldo",
        "Ronaldo",
        "Juninho Paulista",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 p-8">
      <h1 className="text-5xl font-bold text-center text-green-800 mb-10">
        Seleção Brasileira nas Copas do Mundo
      </h1>

      <div className="space-y-8">
        {copas.map((copa) => (
          <div
            key={copa.ano}
            className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-green-600"
          >
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Copa {copa.ano}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {copa.jogadores.map((jogador) => (
                <div
                  key={jogador}
                  className="bg-yellow-100 rounded-lg p-3 text-center font-semibold text-green-900"
                >
                  {jogador}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}