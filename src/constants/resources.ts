import {
  CalendarCheck,
  ChatText,
  Robot,
  Tag,
  TelevisionSimple,
  Truck,
  UsersThree,
} from "phosphor-react";

export const resources = [
  {
    id: "etiquetas",
    Icon: Tag,
    title: "Etiquetas",
    description: "Identifique seus clientes e segmente suas conversas",
    to: "/recursos/etiquetas",
  },
  {
    id: "atendente-virtual",
    Icon: Robot,
    title: "Atendente Virtual",
    description: "Atendimentos automatizados 24h por dia",
    to: "/recursos/atendente-virtual",
  },
  {
    id: "canais-de-atendimento",
    Icon: TelevisionSimple,
    title: "Canais de atendimento",
    description: "Multicanais para atender seus clientes",
    to: "/recursos/canais-de-atendimento",
  },
  {
    id: "nova-conversa",
    Icon: ChatText,
    title: "Nova conversa",
    description: "Inicialize uma conversa com seus clientes",
    to: "/recursos/nova-conversa",
  },
  {
    id: "grupos-de-contato",
    Icon: UsersThree,
    title: "Grupos de contato",
    description: "Crie grupos de contato para segmentar suas mensagens",
    to: "/recursos/grupos-de-contato",
  },
  {
    id: "delivery",
    Icon: Truck,
    title: "Delivery",
    description: "E-commerce integrado para vender seus produtos",
    to: "/recursos/delivery",
  },
  {
    id: "agenda",
    Icon: CalendarCheck,
    title: "Agenda",
    description: "Sistema de agendamento integrado para sua empresa",
    to: "/recursos/agenda",
  },
];
