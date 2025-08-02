let token: string | null = null;

onmessage = function (event) {
  console.log("Token worker received message:", event);

  const { action, payload } = event.data;

  switch (action) {
    case "setToken":
      console.log("Setting token:", payload);
      token = payload;
      console.log("Token set:", token);

      break;
    case "getToken":
      console.log("Getting token", token);
      postMessage({ action: "token", token });
      break;
    case "clearToken":
      token = null;
      postMessage({ action: "tokenCleared" });
      break;
    default:
      console.error("Unknown action:", action);
  }
};
