import { describe, it, expect, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("@/lib/services", () => ({
  getServices: vi.fn(async () => {
    throw new Error("getServices should not be called for malformed JSON");
  }),
  getVerifyIssues: vi.fn(),
}));

import { POST as verifyPOST } from "@/app/api/verify/route";

function makeRequest(url: string, init?: RequestInit): NextRequest {
  return new NextRequest(
    new URL(url, "http://localhost:3000"),
    init as ConstructorParameters<typeof NextRequest>[1],
  );
}

describe("POST /api/verify", () => {
  it("returns 400 for malformed JSON", async () => {
    const res = await verifyPOST(
      makeRequest("http://localhost:3000/api/verify", {
        method: "POST",
        body: "{",
        headers: { "content-type": "application/json" },
      }),
    );

    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: "Malformed JSON" });
  });
});

