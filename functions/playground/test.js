var axios = require("axios");
var data = "";

var config = {
  method: "post",
  url: "https://api.telegram.org/bot5657368601:AAEQ2jJ0Fwuvetdz4bhFOR-X0hYjqecQRpQ/setWebhook?url=https://df8f-149-255-248-48.eu.ngrok.io/bot-demo-aa0a7/us-central1/echoBot",
  headers: {},
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
