"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputError } from "@/components/ui/inputError";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { registerSchema, TRegisterSchema } from "@/schemas/auth/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: yupResolver(registerSchema),
  });

  const { loading } = useAuth();

  const onSubmit = async (data: TRegisterSchema) => {
    try {
      console.log(data);
      // Rota de cadastro
    } catch (err) {}
  };
  return (
    <div className="flex min-h-screen">
      <div className="hidden flex-1 lg:flex items-center justify-center bg-primary text-white rounded-3xl my-14 ml-14">
        <Image
          src="/images/backgrounds/escritorio-social-white.svg"
          alt="Funac Logo"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* Right side with form */}
      <div className="flex-1 flex items-center justify-center p-8 ">
        <div className="w-full max-w-xl space-y-3">
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
              REALIZE SEU CADASTRO
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <Label className="text-lg" htmlFor="name">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Digite seu e-mail..."
                type="name"
                className="h-12 border-2 border-primary text-primary placeholder:text-primary"
                {...register("name")}
              />
              <InputError>{errors.name?.message}</InputError>
            </div>

            <div className="space-y-1">
              <Label className="text-lg" htmlFor="email">
                E-mail
              </Label>
              <Input
                id="email"
                placeholder="Digite seu e-mail..."
                type="email"
                className="h-12 border-2 border-primary text-primary placeholder:text-primary"
                {...register("email")}
              />
              <InputError>{errors.email?.message}</InputError>
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
                {...register("password")}
              />
              <InputError>{errors.password?.message}</InputError>
            </div>

            <div className="space-y-1">
              <Label className="text-lg" htmlFor="confirmPassword">
                Confirme sua senha
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Digite sua senha..."
                className="h-12 border-2 border-primary text-primary placeholder:text-primary"
                {...register("confirmPassword")}
              />
              <InputError>{errors.confirmPassword?.message}</InputError>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white h-14"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Cadastrar"}
            </Button>

            <div className="text-center text-sm">
              <Link
                href="/login"
                className="text-muted-foreground font-bold text-lg hover:underline"
              >
                Já tenho uma conta
              </Link>
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
