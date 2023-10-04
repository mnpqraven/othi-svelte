import type { SignatureAtlas } from '$/bindings/SignatureAtlas';
import type { List } from '$/lib/types';
import type { AvatarConfig } from '$/bindings/AvatarConfig';
import type { SkillTreeConfig } from '$/bindings/SkillTreeConfig';
import type { AvatarSkillConfig } from '$/bindings/AvatarSkillConfig';
import type { EquipmentConfig } from '$/bindings/EquipmentConfig';
import type { EquipmentSkillConfig } from '$/bindings/EquipmentSkillConfig';
import type { EquipmentRanking } from '$/bindings/EquipmentRanking';
import type { AvatarPropertyConfig } from '$/bindings/AvatarPropertyConfig';
import type { AvatarRankConfig } from '$/bindings/AvatarRankConfig';
import type { Patch } from '$/bindings/Patch';
import type { PatchBanner } from '$/bindings/PatchBanner';
// import { createPromiseClient } from '$bufbuild/connect';
// import { createGrpcWebTransport } from '$bufbuild/connect-web';
// import type { ServiceType } from '$bufbuild/protobuf';
import type { EquipmentPromotionConfig } from '$/bindings/EquipmentPromotionConfig';
import type { AvatarPromotionConfig } from '$/bindings/AvatarPromotionConfig';
import type { Banner } from '$/bindings/Banner';
import type { RelicSetConfig } from '$/bindings/RelicSetConfig';
import type { RelicSubAffixConfig } from '$/bindings/RelicSubAffixConfig';
import type { RelicMainAffixConfig } from '$/bindings/RelicMainAffixConfig';
import type { RelicSetSkillConfig } from '$/bindings/RelicSetSkillConfig';
import type { RelicConfig, RelicType } from '$/bindings/RelicConfig';

type CharId = { characterId: number };
type LcId = { lcId: number };

const API = {
  patchDates: get<List<Patch>>('/honkai/patch_dates'),
  lightConeMetadata: get<EquipmentConfig, LcId>(
    ({ lcId }) => `/honkai/light_cone/${lcId}/metadata`
  ),
  patchBanners: get<List<PatchBanner>>('/honkai/patch_banners'),
  lightConeMetadataMany: getPost<List<EquipmentConfig>, List<number>>(
    '/honkai/light_cone/metadata'
  ),
  lightConeSkill: get<EquipmentSkillConfig, LcId>(
    ({ lcId }) => `/honkai/light_cone/${lcId}/skill`
  ),
  lightConeSkillMany: getPost<List<EquipmentSkillConfig>, List<number>>(
    '/honkai/light_cone/skill'
  ),
  lightConeRanking: get<List<EquipmentRanking>>('/honkai/light_cone/ranking'),
  lightConePromotion: get<EquipmentPromotionConfig, LcId>(
    ({ lcId }) => `/honkai/light_cone/${lcId}/promotion`
  ),
  character: get<AvatarConfig, CharId>(
    ({ characterId }) => `/honkai/avatar/${characterId}`
  ),
  characterByIds: getPost<List<AvatarConfig>, List<number>>('/honkai/avatar'),
  signatureAtlas: get<List<SignatureAtlas>>('/honkai/signature_atlas'),
  skillsByCharId: get<List<AvatarSkillConfig>, CharId>(
    ({ characterId }) => `/honkai/avatar/${characterId}/skill`
  ),
  trace: get<List<SkillTreeConfig>, CharId>(
    ({ characterId }) => `/honkai/avatar/${characterId}/trace`
  ),
  properties: get<List<AvatarPropertyConfig>>('/honkai/properties'),
  eidolon: get<List<AvatarRankConfig>, CharId>(
    ({ characterId }) => `/honkai/avatar/${characterId}/eidolon`
  ),
  promotion: get<AvatarPromotionConfig, CharId>(
    ({ characterId }) => `/honkai/avatar/${characterId}/promotion`
  ),
  warpBanner: get<List<Banner>>('/honkai/warp_banners'),
  relicSlotType: post<Record<number, RelicType>, List<number>>(
    '/honkai/relics/slot_type'
  ),
  relics: post<List<RelicConfig>, List<number>>('/honkai/relics'),
  relicSets: get<List<RelicSetConfig>>('/honkai/relic_set'),
  relicSet: get<List<RelicSetConfig>, { relicSetId: number }>(
    ({ relicSetId }) => `/honkai/relic_set/${relicSetId}`
  ),
  relicSetBonuses: get<List<RelicSetSkillConfig>>('/honkai/relic_set/bonus'),
  relicSetBonus: get<RelicSetSkillConfig, { relicSetId: number }>(
    ({ relicSetId }) => `/honkai/relic_set/bonus/${relicSetId}`
  ),
  substatSpread: get<List<RelicSubAffixConfig>>(
    '/honkai/relics/statspread/sub'
  ),
  mainstatSpread: get<Record<RelicType, RelicMainAffixConfig[]>>(
    '/honkai/relics/statspread/main'
  )
};

type Get<TRes, P> = { get: (params: P) => Promise<TRes> };
type DirectGet<TRes> = { get: () => Promise<TRes> };
type Post<TRes, TPayload, P> = {
  post: (params: P, payload?: TPayload) => Promise<TRes>;
};
type DirectPost<TRes, TPayload> = {
  post: (payload?: TPayload) => Promise<TRes>;
};

// type ReturnDev<TRes, U> = { get: (params: U) => Promise<TRes> };
// type OptionalReturnDev<TRes> = { get: () => Promise<TRes> };

function get<TRes>(path: string): DirectGet<TRes>;
function get<TRes, TParam>(path: (t: TParam) => string): Get<TRes, TParam>;
function get<TRes, TParam>(
  path: string | ((params: TParam) => string)
): DirectGet<TRes> | Get<TRes, TParam> {
  if (typeof path === 'string')
    return {
      get: async () => await serverFetch<unknown, TRes>(path)
    };

  return {
    get: async (params: TParam) =>
      await serverFetch<unknown, TRes>(path(params))
  };
}

function post<TRes, TPayload>(path: string): DirectPost<TRes, TPayload>;
function post<TRes, TPayload, TParam>(
  path: (t: TParam) => string
): Post<TRes, TPayload, TParam>;
function post<TRes, TPayload, TParam>(
  path: string | ((t: TParam) => string)
): DirectPost<TRes, TPayload> | Post<TRes, TPayload, TParam> {
  if (typeof path === 'string')
    return {
      post: async (payload?: TPayload) =>
        await serverFetch<TPayload, TRes>(path, { method: 'POST', payload })
    };

  return {
    post: async (params: TParam, payload?: TPayload) =>
      await serverFetch<TPayload, TRes>(path(params), {
        method: 'POST',
        payload
      })
  };
}

function getPost<TRes, TPayload>(
  path: string
): DirectGet<TRes> & DirectPost<TRes, TPayload>;

function getPost<TRes, TPayload, TParam>(
  path: (t: TParam) => string
): Get<TRes, TParam> & Post<TRes, TPayload, TParam>;

function getPost<TRes, TPayload, TParam>(
  path: string | ((t: TParam) => string)
):
  | (DirectGet<TRes> & DirectPost<TRes, TPayload>)
  | (Get<TRes, TParam> & Post<TRes, TPayload, TParam>) {
  if (typeof path === 'string') {
    return {
      get: async () => await serverFetch<unknown, TRes>(path),
      post: async (payload?: TPayload) =>
        await serverFetch<TPayload, TRes>(path, {
          method: 'POST',
          payload
        })
    };
  } else {
    return {
      get: async (params: TParam) =>
        await serverFetch<unknown, TRes>(path(params)),
      post: async (params: TParam, payload?: TPayload) =>
        await serverFetch<TPayload, TRes>(path(params), {
          method: 'POST',
          payload
        })
    };
  }
}

// export function rpc<T extends ServiceType>(service: T) {
//   const client = createPromiseClient(
//     service,
//     createGrpcWebTransport({
//       baseUrl: env.NEXT_PUBLIC_WORKER_API
//     })
//   );
//   return client;
// }

export async function serverFetch<TPayload, TResponse>(
  endpoint: string,
  opt?: {
    payload?: TPayload;
    method: 'POST' | 'DELETE';
  }
): Promise<TResponse> {
  const url = PUBLIC_WORKER_API + endpoint;
  console.log(url);

  // POST
  if (opt) {
    const { payload, method } = opt;
    const body = JSON.stringify(payload);
    const res = await fetch(url, {
      body,
      headers: {
        'Content-Type': 'application/json'
      },
      method
    });

    if (res.ok) {
      return res.json();
    } else {
      console.error('api fetch failed, code:', res.status);
      console.error('url:', url);
      const errText = await res.text();
      console.error('unknown error', errText);
      return Promise.reject(`unknown error ${errText}`);
    }
  } else {
    // GET
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    });

    if (res.ok) {
      return res.json();
    } else {
      console.error('api fetch failed, code:', res.status);
      console.error('url:', url);
      return Promise.reject(`unknown error ${await res.text()}`);
    }
  }
}

export default API;

import type { Post as Postt } from './types';
import { PUBLIC_WORKER_API } from '$env/static/public';

export const api = (customFetch = fetch) => ({
  getPosts: async (limit: number) => {
    const response = await customFetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const data = (await response.json()) as Postt[];
    return data.filter((x) => x.id <= limit);
  },
  getPostById: async (id: number): Promise<Postt> => {
    const response = await customFetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = (await response.json()) as Postt;
    return data;
  }
});
