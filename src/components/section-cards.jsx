"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RiArrowUpLine, RiArrowDownLine } from "@remixicon/react"

export function SectionCards() {
  return (
    <div
      className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
  <CardHeader>
    <CardDescription>Copas do Mundo</CardDescription>
    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
      5
    </CardTitle>
    <CardAction>
      <Badge variant="outline">
        🏆 Pentacampeã
      </Badge>
    </CardAction>
  </CardHeader>
  <CardFooter className="flex-col items-start gap-1.5 text-sm">
    <div className="font-medium">
      Maior campeã da história
    </div>
    <div className="text-muted-foreground">
      Títulos em 1958, 1962, 1970, 1994 e 2002
    </div>
  </CardFooter>
</Card>

<Card className="@container/card">
  <CardHeader>
    <CardDescription>Maior Artilheiro</CardDescription>
    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
      Neymar
    </CardTitle>
    <CardAction>
      <Badge variant="outline">
        ⚽ 79 gols
      </Badge>
    </CardAction>
  </CardHeader>
  <CardFooter className="flex-col items-start gap-1.5 text-sm">
    <div className="font-medium">
      Recordista da Seleção
    </div>
    <div className="text-muted-foreground">
      Superou Pelé em gols marcados
    </div>
  </CardFooter>
</Card>

<Card className="@container/card">
  <CardHeader>
    <CardDescription>Jogador Histórico</CardDescription>
    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
      Pelé
    </CardTitle>
    <CardAction>
      <Badge variant="outline">
        👑 Rei do Futebol
      </Badge>
    </CardAction>
  </CardHeader>
  <CardFooter className="flex-col items-start gap-1.5 text-sm">
    <div className="font-medium">
      Tricampeão mundial
    </div>
    <div className="text-muted-foreground">
      Considerado um dos maiores da história
    </div>
  </CardFooter>
</Card>

<Card className="@container/card">
  <CardHeader>
    <CardDescription>Fundação</CardDescription>
    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
      1914
    </CardTitle>
    <CardAction>
      <Badge variant="outline">
        🇧🇷 CBF
      </Badge>
    </CardAction>
  </CardHeader>
  <CardFooter className="flex-col items-start gap-1.5 text-sm">
    <div className="font-medium">
      Mais de 100 anos de história
    </div>
    <div className="text-muted-foreground">
      Uma das seleções mais tradicionais do mundo
    </div>
  </CardFooter>
</Card>
    </div>
  );
}
