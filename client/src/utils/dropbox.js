require("isomorphic-fetch"); // or another library of choice.
var Dropbox = require("dropbox").Dropbox;

async function dropbox(email) {
  var dbx = new Dropbox({
    accessToken:
      "sl.Bo6lbTUg5vzlII51LZUrZnFFodm3tWoYXiZlJuiu5NZEjgnuQN3dsP5etO0HjUz3CuSpdTs7dmxkFKnL-MRwwBolt0slWUMvwM0baBNzN48Z6r5et-cUmhptvBlu3u4qQuHX92X4_lGu",
  });

  var folderId = await dbx.filesGetMetadata({ path: "/hmf_sfh_23" });
  console.log(folderId);

  //   dbx
  //     .filesGetMetadata({ path: "/hmf_sfh_23" })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   var member_selector = await dropbox.sharing.MemberSelector.email(email);
  //   var add_member = await dropbox.sharing.AddMember(member_selector);
  //   var members = [add_member];
  //   var folderId = await dbx.files_get_metadata("/hmf_sfh_23/");
  //   var res = await dbx.sharing_add_folder_member(folderId, members);
  //   console.log(await res);
  //   console.log(email);
}

export default dropbox;
