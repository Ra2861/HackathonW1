import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    W1 Holdings
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Revolucionando a forma como você gerencia seus patrimônios e holdings. Tenha controle total sobre
                    seus ativos com nossa plataforma intuitiva.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button className="bg-white text-black hover:bg-gray-200">Acessar Plataforma</Button>
                  </Link>
                  <Link href="/register">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Criar Conta
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-gray-800 bg-black/40 p-4 shadow-xl">
                  <div className="flex flex-col space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-white">W1</div>
                        <div className="text-xs text-gray-400">Holdings Manager</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-800">
                        <div className="h-full w-2/3 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <div className="rounded-lg border border-gray-800 bg-black/60 p-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-white">Patrimônio Total</div>
                          <div className="text-sm font-bold text-white">R$ 12.450.000,00</div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-800 bg-black/60 p-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-white">Holdings</div>
                          <div className="text-sm font-bold text-white">3</div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-800 bg-black/60 p-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-white">Empresas</div>
                          <div className="text-sm font-bold text-white">7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recursos Principais</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma oferece tudo o que você precisa para gerenciar seus patrimônios e holdings de forma
                  eficiente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="rounded-full bg-gray-900 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Gestão de Patrimônio</h3>
                <p className="text-center text-gray-500">
                  Acompanhe todos os seus ativos em um único lugar, com atualizações em tempo real.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="rounded-full bg-gray-900 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Criação de Holdings</h3>
                <p className="text-center text-gray-500">
                  Processo simplificado para criação e gestão de holdings, com suporte jurídico integrado.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="rounded-full bg-gray-900 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Dashboard Completo</h3>
                <p className="text-center text-gray-500">
                  Visualize todos os seus dados em um dashboard intuitivo e personalizável.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">W1</span>
              <span className="text-sm text-gray-500">Holdings Manager</span>
            </div>
            <p className="text-center text-sm text-gray-500 md:text-left">
              © 2025 W1 Holdings. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
