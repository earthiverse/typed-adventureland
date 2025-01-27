import { TradeSlotType } from "./entity";
import { MapKey, StandKey } from "./G";
import { TradeItemInfo } from "./items";
import { XOnlineCharacter, XServerInfos } from "./index";
import { BetterUXWrapper } from "./types/GTypes/utils";

export type ServersAndCharactersApiResponse = [{
  type: "servers_and_characters";
  servers: XServerInfos[];
  characters: XOnlineCharacter[];
  tutorial: {
    step: number;
    task: boolean;
    completed: [];
    progress: number;
  };
  code_list: Record<string, [string, number]>;
  mail: number;
  rewards: [];
}];

export type FriendsApiResponse = {
  type: "friends";
  chars: unknown[];
}

export type MerchantsApiResponse = {
  type: "merchants";
  chars: Array<{
    map: MapKey;
    cx: string; // cosmetics
    skin: string;
    slots: Partial<Record<TradeSlotType, TradeItemInfo>>;
    name: string;
    level: number;
    afk: boolean | string;
    server: string;
    stand: StandKey | "cstand" /** computer stand */;
    y: number;
    x: number;
  }>;
};
export type RawApiResponse = ServersAndCharactersApiResponse | MerchantsApiResponse;
export type ApiResponse = BetterUXWrapper<RawApiResponse>;

export interface ApiCalls {
  pull_merchants: MerchantsApiResponse;
  pull_friends: FriendsApiResponse;
}
