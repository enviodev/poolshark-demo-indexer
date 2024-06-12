// https://github.com/poolshark-protocol/limit-sway/blob/abi-generation/contracts/pool/src/limit_pool.sw
import { LimitPoolContract } from "generated";

LimitPoolContract.InitPoolEvent.loader(({ event, context }) => {});

LimitPoolContract.InitPoolEvent.handler(({ event, context }) => {
  console.log("event.data");
  console.log(event.data);
});

LimitPoolContract.SwapEvent.loader(({ event, context }) => {});

LimitPoolContract.SwapEvent.handler(({ event, context }) => {
  console.log("event.data");
  console.log(event.data);
});

LimitPoolContract.MintLimitEvent.loader(({ event, context }) => {});

LimitPoolContract.MintLimitEvent.handler(({ event, context }) => {
  console.log("event.data");
  console.log(event.data);
});

LimitPoolContract.BurnLimitEvent.loader(({ event, context }) => {});

LimitPoolContract.BurnLimitEvent.handler(({ event, context }) => {
  console.log("event.data");
  console.log(event.data);
});

LimitPoolContract.BurnRangeEvent.loader(({ event, context }) => {});

LimitPoolContract.BurnRangeEvent.handler(({ event, context }) => {
  console.log("event.data");
  console.log(event.data);
});
