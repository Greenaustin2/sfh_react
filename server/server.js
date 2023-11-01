const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const { Dropbox } = require("dropbox"); // eslint-disable-line import/no-unresolved
// const config = {
//   fetch,
//   clientId: ["19p9uhg6kwha21f"],
// };
// const dbx = new Dropbox(config);

// app.get("/", (req, res) => {
//   dbx.auth
//     .getAuthenticationUrl(
//       redirectUri,
//       null,
//       "code",
//       "offline",
//       null,
//       "none",
//       true
//     )
//     .then((authUrl) => {
//       res.writeHead(302, { Location: authUrl });
//       res.end();
//     });
// });

// app.get("/auth", (req, res) => {
//   // eslint-disable-line no-unused-vars
//   const { code } = req.query;
//   console.log(`code:${code}`);

//   dbx.auth
//     .getAccessTokenFromCode(redirectUri, code)
//     .then((token) => {
//       console.log(`Token Result:${JSON.stringify(token)}`);
//       dbx.auth.setRefreshToken(token.result.refresh_token);
//       dbx
//         .usersGetCurrentAccount()
//         .then((response) => {
//           console.log("response", response);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
