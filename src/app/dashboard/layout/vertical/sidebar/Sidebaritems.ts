import { uniqueId } from "lodash";

export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

const SidebarContent: MenuItem[] = [
  {
    children: [
      {
        name: "Dashboard",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        url: "/dashboard",
      },
      {
        name: "Gestão",
        icon: "solar:users-group-rounded-outline",
        id: uniqueId(),
        children: [
          {
            name: "Usuários",
            icon: "solar:user-plus-outline",
            id: uniqueId(),
            url: "/gestao/usuarios",
          },
        ],
      },
      {
        name: "Projetos",
        icon: "solar:folder-outline",
        id: uniqueId(),
        url: "/projetos",
      },
      // {
      //   name: "Almoxarifado",
      //   icon: "solar:paperclip-outline",
      //   id: uniqueId(),
      //   url: "/almoxarifado",
      // },
      {
        name: "Serviços",
        icon: "solar:clipboard-list-outline",
        id: uniqueId(),
        children: [
          {
            name: "Pessoas",
            icon: "solar:user-plus-outline",
            id: uniqueId(),
            url: "/servicos/pessoas",
          },
        ],
      },
      // {
      //   name: "Frotas",
      //   icon: "lucide:car",
      //   id: uniqueId(),
      //   children: [
      //     {
      //       name: "Veículo",
      //       icon: "lucide:id-card",
      //       id: uniqueId(),
      //       url: "/frotas/veiculo",
      //     },
      //     {
      //       name: "Condutor",
      //       icon: "solar:user-outline",
      //       id: uniqueId(),
      //       url: "/frotas/condutor",
      //     },
      //     {
      //       name: "Infrações",
      //       icon: "solar:danger-circle-outline",
      //       id: uniqueId(),
      //       url: "/frotas/infracoes",
      //     },
      //     {
      //       name: "Reservas",
      //       icon: "solar:calendar-outline",
      //       id: uniqueId(),
      //       url: "/frotas/reservas",
      //     },
      //   ],
      // },
      {
        name: "Relatórios",
        icon: "solar:chart-outline",
        id: uniqueId(),
        url: "/relatorios",
      },
    ],
  },
];

export default SidebarContent;
