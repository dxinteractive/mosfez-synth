import { VoiceController } from "./voice-controller";

type Params = {
  voice: string;
  foo: number;
  bar: number;
  baz?: number;
  gate: number;
};

it("should allow params to be set on all voices", () => {
  const controller = new VoiceController<Params>({
    totalVoices: 3,
    maxKeys: 1000,
  });

  const params = {};

  const result = controller.set(params);

  expect(result).toEqual([
    {
      index: 0,
      params,
    },
    {
      index: 1,
      params,
    },
    {
      index: 2,
      params,
    },
  ]);
});

it("should only send new on all voices", () => {
  const controller = new VoiceController<Params>({
    totalVoices: 3,
    maxKeys: 1000,
  });

  controller.set({
    foo: 10,
    bar: 7,
  });

  const params = {
    foo: 100,
  };
  const result = controller.set(params);

  expect(result).toEqual([
    {
      index: 0,
      params: params,
    },
    {
      index: 1,
      params: params,
    },
    {
      index: 2,
      params: params,
    },
  ]);
});

it("should allow params to be set on a single voice", () => {
  const controller = new VoiceController<Params>({
    totalVoices: 3,
    maxKeys: 1000,
  });

  controller.set({
    foo: 0,
    bar: 0,
  });

  const result = controller.set({
    voice: "a",
    gate: 1,
    foo: 1,
  });

  expect(result).toEqual([
    {
      index: 0,
      params: {
        bar: 0,
        foo: 1,
        gate: 1,
      },
    },
  ]);
});

it("should allow params to be set again on a single voice", () => {
  const controller = new VoiceController<Params>({
    totalVoices: 3,
    maxKeys: 1000,
  });

  controller.set({
    foo: 0,
    bar: 0,
  });

  controller.set({
    voice: "a",
    gate: 1,
    foo: 1,
  });

  const result = controller.set({
    voice: "a",
    gate: 1,
    bar: 1,
  });

  expect(result).toEqual([
    {
      index: 0,
      params: {
        foo: 1,
        bar: 1,
        gate: 1,
      },
    },
  ]);
});

it("should allow an all-voice param to be set over a per-voice params", () => {
  const controller = new VoiceController<Params>({
    totalVoices: 3,
    maxKeys: 1000,
  });

  controller.set({
    foo: 0,
    bar: 0,
  });

  controller.set({
    voice: "a",
    gate: 1,
    foo: 1,
    baz: 2,
  });

  const result = controller.set({
    foo: 3,
  });

  expect(result).toEqual([
    {
      index: 0,
      params: {
        foo: 3,
      },
    },
    {
      index: 1,
      params: {
        foo: 3,
      },
    },
    {
      index: 2,
      params: {
        foo: 3,
      },
    },
  ]);

  const result2 = controller.set({
    voice: "a",
    gate: 1,
    bar: 9,
  });

  expect(result2).toEqual([
    {
      index: 0,
      params: {
        foo: 3, // from last all-voice
        bar: 9, // from this per-voice
        baz: 2, // from last per-voice
        gate: 1, // from this per-voice
      },
    },
  ]);
});

it("should control many voices", () => {
  const controller = new VoiceController<Params>({
    totalVoices: 3,
    maxKeys: 1000,
  });

  controller.set({
    bar: -1,
  });

  controller.set({
    bar: 0,
  });

  const results = [
    controller.set({
      voice: "a",
      gate: 1,
      foo: 1,
    }),
    controller.set({
      voice: "b",
      gate: 1,
      foo: 2,
    }),
    controller.set({
      voice: "c",
      gate: 1,
      foo: 3,
    }),
    controller.set({
      voice: "d",
      gate: 1,
      foo: 4,
    }),
  ];

  expect(results).toEqual([
    [
      {
        index: 0,
        params: { gate: 1, foo: 1, bar: 0 },
      },
    ],
    [
      {
        index: 1,
        params: { gate: 1, foo: 2, bar: 0 },
      },
    ],
    [
      {
        index: 2,
        params: { gate: 1, foo: 3, bar: 0 },
      },
    ],
    [
      {
        index: 0,
        params: { gate: 1, foo: 4, bar: 0 },
      },
    ],
  ]);
});

it("should limit the number of voice params", () => {
  const controller = new VoiceController<Params>({
    totalVoices: 10,
    maxKeys: 3,
  });

  const results = [
    controller.set({
      voice: "a",
      gate: 1,
      foo: 1,
    }),
    controller.set({
      voice: "b",
      gate: 1,
      foo: 2,
    }),
    controller.set({
      voice: "c",
      gate: 1,
      foo: 3,
    }),
    controller.set({
      voice: "d",
      gate: 1,
      foo: 4,
    }),
    // set first again with different params to prove its been cleaned up
    controller.set({
      voice: "a",
      gate: 1,
      bar: 5,
    }),
    // set last again with different params to prove its not been cleaned up
    controller.set({
      voice: "d",
      gate: 1,
      bar: 6,
    }),
  ];

  expect(results).toEqual([
    [
      {
        index: 0,
        params: { gate: 1, foo: 1 },
      },
    ],
    [
      {
        index: 1,
        params: { gate: 1, foo: 2 },
      },
    ],
    [
      {
        index: 2,
        params: { gate: 1, foo: 3 },
      },
    ],
    [
      {
        index: 3,
        params: { gate: 1, foo: 4 },
      },
    ],
    // should not remember foo from the first call
    [
      {
        index: 0,
        params: { gate: 1, bar: 5 },
      },
    ],
    // should remember foo from the first call
    [
      {
        index: 3,
        params: { gate: 1, foo: 4, bar: 6 },
      },
    ],
  ]);
});
