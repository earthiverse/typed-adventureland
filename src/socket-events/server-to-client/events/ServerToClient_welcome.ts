import { CharacterEntity } from "../../../entity";
import { MapKey } from "../../../G";
import { ServerIdentifier, ServerRegion } from "../../../server";
import { ServerToClient_server_info } from "./ServerToClient_server_info";

export type ServerToClient_welcome = {
  /** The character gets returned if you open a socket with a secret (i.e. /comm and click on one of your characters) */
  character?: CharacterEntity;
  S: ServerToClient_server_info;
  region: ServerRegion;
  in: string;
  map: MapKey;

  // TODO: Find out if this is "hardcore" on a hardcore server
  gameplay: "normal";

  // TODO: Find out what this is
  info: object;

  name: ServerIdentifier;
  pvp: boolean;
  x: number;
  y: number;
};
