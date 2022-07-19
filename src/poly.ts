import { VoiceAllocator } from "./internal/voice-allocator";
import type { DspNode, ParamValueObject } from "./types";

export function poly<P extends ParamValueObject>(
  voice: DspNode<P>,
  polyphony: number
): DspNode<P> {
  return {
    type: "poly",
    voice,
    polyphony,
    dependencies: {
      voiceAllocator: VoiceAllocator,
    },
  };
}
