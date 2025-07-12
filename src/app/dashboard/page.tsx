"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";

const page = () => {
return (
    <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <h1 className="text-2xl font-semibold text-primary">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-md">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-sm text-muted">Usuários</h2>
              <p className="text-xl font-semibold">234</p>
            </div>
            <Icon icon="solar:user-bold" className="text-primary" height={32} />
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-sm text-muted">Projetos Ativos</h2>
              <p className="text-xl font-semibold">18</p>
            </div>
            <Icon icon="solar:folder-outline" className="text-primary" height={32} />
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-sm text-muted">Relatórios Emitidos</h2>
              <p className="text-xl font-semibold">52</p>
            </div>
            <Icon icon="solar:chart-outline" className="text-primary" height={32} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
