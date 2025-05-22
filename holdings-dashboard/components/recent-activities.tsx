import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivities() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Nova holding criada: W1 Participações</p>
          <p className="text-sm text-muted-foreground">Há 2 horas por João Dias</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Imóvel adicionado: Edifício Comercial</p>
          <p className="text-sm text-muted-foreground">Há 5 horas por Ana Martins</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Empresa adicionada: Tech Solutions Ltda</p>
          <p className="text-sm text-muted-foreground">Há 1 dia por João Dias</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>LS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Relatório fiscal gerado</p>
          <p className="text-sm text-muted-foreground">Há 2 dias por Luiza Silva</p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Atualização de patrimônio</p>
          <p className="text-sm text-muted-foreground">Há 3 dias por Ana Martins</p>
        </div>
      </div>
    </div>
  )
}
