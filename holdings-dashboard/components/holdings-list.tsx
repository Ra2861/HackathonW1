import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, FileEdit, Eye, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HoldingsList() {
  const holdings = [
    {
      id: 1,
      nome: "W1 Participações",
      tipo: "Familiar",
      empresas: 3,
      patrimonio: "R$ 5.200.000,00",
      status: "Ativa",
    },
    {
      id: 2,
      nome: "Grupo Investimentos",
      tipo: "Patrimonial",
      empresas: 2,
      patrimonio: "R$ 4.800.000,00",
      status: "Ativa",
    },
    {
      id: 3,
      nome: "Imobiliária Holdings",
      tipo: "Imobiliária",
      empresas: 2,
      patrimonio: "R$ 2.450.000,00",
      status: "Em análise",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Holdings</CardTitle>
          <CardDescription>Gerencie todas as suas holdings em um único lugar.</CardDescription>
        </div>
        <Button className="ml-auto">Nova Holding</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Empresas</TableHead>
              <TableHead>Patrimônio</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((holding) => (
              <TableRow key={holding.id}>
                <TableCell className="font-medium">{holding.nome}</TableCell>
                <TableCell>{holding.tipo}</TableCell>
                <TableCell>{holding.empresas}</TableCell>
                <TableCell>{holding.patrimonio}</TableCell>
                <TableCell>
                  <Badge variant={holding.status === "Ativa" ? "default" : "secondary"}>{holding.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>Visualizar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileEdit className="mr-2 h-4 w-4" />
                        <span>Editar</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Excluir</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
