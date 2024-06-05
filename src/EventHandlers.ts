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
