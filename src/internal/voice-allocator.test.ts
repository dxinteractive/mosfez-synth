import { VoiceAllocator } from "./voice-allocator";

jest.useFakeTimers();

it("should intialise with a set of voices", () => {
  const allocator = new VoiceAllocator(3);

  expect(allocator.voices).toEqual([undefined, undefined, undefined]);
});

it("should start a voice", () => {
  const allocator = new VoiceAllocator(3);

  const results = [allocator.start("a")];

  expect(allocator.voices).toEqual(["a", undefined, undefined]);
  expect(results).toEqual([[0, true]]);
});

it("should start many voices", () => {
  const allocator = new VoiceAllocator(3);

  const results = [
    allocator.start("a"),
    allocator.start("b"),
    allocator.start("c"),
  ];

  expect(allocator.voices).toEqual(["a", "b", "c"]);
  expect(results).toEqual([
    [0, true],
    [1, true],
    [2, true],
  ]);
});

it("should get a voice", () => {
  const allocator = new VoiceAllocator(3);

  allocator.start("a");
  allocator.start("b");
  allocator.start("c");

  expect(allocator.get("b")).toBe(1);
});

it("should get a voice and miss", () => {
  const allocator = new VoiceAllocator(3);

  allocator.start("a");
  allocator.start("b");
  allocator.start("c");

  expect(allocator.get("z")).toBe(-1);
});

it("should start a voice twice with no effect", () => {
  const allocator = new VoiceAllocator(3);

  const results = [allocator.start("a"), allocator.start("a")];

  expect(allocator.voices).toEqual(["a", undefined, undefined]);
  expect(results).toEqual([
    [0, true],
    [0, false],
  ]);
});

it("should stop a voice", () => {
  const allocator = new VoiceAllocator(3);

  const results = [allocator.start("a"), allocator.stop("a")];

  expect(allocator.voices).toEqual([undefined, undefined, undefined]);
  expect(results).toEqual([
    [0, true],
    [0, false],
  ]);
});

it("should start too many voices, stealing the oldest", () => {
  const allocator = new VoiceAllocator(3);

  const results = [
    allocator.start("a"),
    allocator.start("b"),
    allocator.start("c"),
    allocator.start("d"),
  ];

  expect(allocator.voices).toEqual(["d", "b", "c"]);
  expect(results).toEqual([
    [0, true],
    [1, true],
    [2, true],
    [0, true],
  ]);
});

it("should release a voice", () => {
  const allocator = new VoiceAllocator(3);

  const results = [allocator.start("a"), allocator.release("a", 100)];

  expect(allocator.voices).toEqual(["a", undefined, undefined]);
  expect(results).toEqual([
    [0, true],
    [0, false],
  ]);

  jest.advanceTimersByTime(50);
  expect(allocator.voices).toEqual(["a", undefined, undefined]);

  jest.advanceTimersByTime(100);
  expect(allocator.voices).toEqual([undefined, undefined, undefined]);
});

it("should reclaim a released voice", () => {
  const allocator = new VoiceAllocator(3);

  const results = [
    allocator.start("a"),
    allocator.start("b"),
    allocator.start("c"),
    allocator.release("b", 100),
    allocator.start("b"),
  ];

  expect(allocator.voices).toEqual(["a", "b", "c"]);
  expect(results).toEqual([
    [0, true],
    [1, true],
    [2, true],
    [1, false],
    [1, false],
  ]);

  jest.advanceTimersByTime(150);
  expect(allocator.voices).toEqual(["a", "b", "c"]);
});

it("should reuse a different released voice", () => {
  const allocator = new VoiceAllocator(3);

  const results = [
    allocator.start("a"),
    allocator.start("b"),
    allocator.start("c"),
    allocator.release("b", 100),
    allocator.start("d"),
  ];

  expect(allocator.voices).toEqual(["a", "d", "c"]);
  expect(results).toEqual([
    [0, true],
    [1, true],
    [2, true],
    [1, false],
    [1, true],
  ]);

  jest.advanceTimersByTime(150);
  expect(allocator.voices).toEqual(["a", "d", "c"]);
});
