export interface PQRDefinicion {
  key: string;
  titulo: string;
  descripcion: string;
}

export interface PQRCanalItem {
  label: string;
  valor: string;
  href?: string;
}

export interface PQRCanal {
  tipo: string;
  titulo: string;
  items: PQRCanalItem[];
}

export interface PQRPasoProceso {
  numero: number;
  titulo: string;
  descripcion: string;
}

export interface PQRTiempoRespuesta {
  tipo: string;
  plazo: string;
}

export interface PQRNorma {
  nombre: string;
  descripcion: string;
}
