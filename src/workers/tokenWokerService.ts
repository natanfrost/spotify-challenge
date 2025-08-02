const tokenWorkerService = new Worker(
  new URL("./tokenWorker.ts", import.meta.url),
  {
    type: "module",
  }
);

export default tokenWorkerService;
