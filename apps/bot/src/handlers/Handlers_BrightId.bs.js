// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


var brightIdContent = "\n__**Available BrightId commands:**__\n- `!verify` → Sends a BrightID QR code for users to connect with their BrightId\n- `!me`→ After scanning the qr code, add yourself to the list of verified users\n- `!guilds` → View a list of discord servers that use this bot. Lots of cool servers use BrightId for token airdrops 😉\n__**admin only**__\n- `!role` → Use this command to change the name of the \"Verified\" role\n- `!invite` → Use this command to add an invite for this discord to the guilds\n";

function brightId(param, param$1, message) {
  return message.reply(brightIdContent);
}

exports.brightIdContent = brightIdContent;
exports.brightId = brightId;
/* No side effect */