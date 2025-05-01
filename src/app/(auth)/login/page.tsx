// src/app/login/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden flex-1 lg:flex items-center justify-center bg-primary text-white rounded-3xl my-14 ml-14">
        <Image
          src="/images/backgrounds/escritorio-social-white.svg"
          alt="Funac Logo"
          width={500}
          height={500}
        />
      </div>

      {/* Right side with form */}
      <div className="flex-1 flex items-center justify-center p-8 ">
        <div className="w-full max-w-xl space-y-12">
          <div>
            <div className="flex gap-4 border-b-4 border-primary  p-4">
              <Image
                src="/images/logos/logo-icon.svg"
                alt="Funac Logo"
                width={100}
                height={100}
              />
              <Image
                src="/images/logos/logo.svg"
                alt="Funac Logo"
                width={270}
                height={270}
              />
            </div>
            <p className=" text-primary mt-1 font-black text-2xl">
              BEM VINDO À CENTRAL DE SERVIÇOS
            </p>
            <p className="  font-black text-2xl text-secondary">
              {" "}
              REALIZE SEU LOGIN
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-1">
              <Label className="text-lg" htmlFor="email">
                E-mail
              </Label>
              <Input
                id="email"
                placeholder="Digite seu e-mail..."
                type="email"
                className="h-12 border-2 border-primary text-primary placeholder:text-primary"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-lg" htmlFor="password">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha..."
                className="h-12 border-2 border-primary text-primary placeholder:text-primary"
              />
              <div className="text-right text-sm mt-1">
                <a
                  href="#"
                  className="underline text-muted-foreground  font-bold text-base"
                >
                  Esqueci a senha
                </a>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14">
              ENTRAR
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground font-bold text-lg">
                Já tenho uma conta
              </span>
            </div>
          </form>

          <div className="flex justify-center gap-2 ">
            <Image
              src="/images/logos/logo-if.png"
              alt="IF Logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
