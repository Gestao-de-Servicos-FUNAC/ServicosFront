"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";

const page = () => {
  return (
    <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-primary">Projetos</h1>
        <Button className="bg-primary text-white">
          <Icon icon="ic:baseline-add" className="mr-2" /> Novo Projeto
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((id) => (
          <Card key={id} className="shadow-sm">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-dark mb-2">
                Projeto {id}
              </h2>
              <p className="text-sm text-muted mb-2">
                Descrição breve do projeto {id}. Status, responsável e prazo.
              </p>
              <Button size="sm" variant="outline">
                Detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
