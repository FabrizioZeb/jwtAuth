import { SetMetadata } from "@nestjs/common";


export const Public = () => SetMetadata("isPublic", true)

//Para permitir el paso se debe poner los metadatos en público, debido que tiene el guard del at globalmente