import { PQRPage } from "@/modules/pqr/pages/PQRPage";

export const metadata = {
  title: "PQRSF | VitaNova IPS",
  description:
    "Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones — información sobre canales de atención, proceso, tiempos de respuesta y normativa vigente de VitaNova IPS.",
};

export default function PQRRoute() {
  return <PQRPage />;
}
