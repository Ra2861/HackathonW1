import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto w-full max-w-md space-y-6 px-4">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-gray-900 p-4">
              <div className="text-3xl font-bold">W1</div>
            </div>
            <h1 className="text-3xl font-bold">Acesse sua conta</h1>
            <p className="text-gray-400">Entre com suas credenciais para acessar o dashboard</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                placeholder="seu@email.com"
                type="email"
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-300">
                  Senha
                </Label>
                <Link href="/reset-password" className="text-sm text-gray-400 hover:text-white">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500"
              />
            </div>
            <Button className="w-full bg-white text-black hover:bg-gray-200">Entrar</Button>
            <div className="text-center text-sm">
              <span className="text-gray-400">Não tem uma conta?</span>{" "}
              <Link href="/register" className="text-white hover:underline">
                Registre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
