import test from "node:test";import assert from "node:assert/strict";import{fiscalPeriod}from"../src/index.js";
test("calendar fiscal year",()=>assert.deepEqual(fiscalPeriod("2026-05-01",{startMonth:1}),{fiscalYear:2026,quarter:2}));
test("july start",()=>assert.deepEqual(fiscalPeriod("2026-07-01",{startMonth:7}),{fiscalYear:2027,quarter:1}));
test("pre-start month",()=>assert.deepEqual(fiscalPeriod("2026-06-01",{startMonth:7}),{fiscalYear:2026,quarter:4}));
