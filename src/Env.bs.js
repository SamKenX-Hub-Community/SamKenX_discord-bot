// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Js_dict = require("rescript/lib/js/js_dict.js");
var Process = require("process");

var nodeEnv = Process.env;

function env(name) {
  var value = Js_dict.get(nodeEnv, name);
  if (value !== undefined) {
    return {
            TAG: /* Ok */0,
            _0: value
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: "Environment variable " + name + " is missing"
          };
  }
}

function getConfig(param) {
  var discordApiToken = env("DISCORD_API_TOKEN");
  if (discordApiToken.TAG === /* Ok */0) {
    return {
            TAG: /* Ok */0,
            _0: /* DiscordToken */{
              _0: discordApiToken._0
            }
          };
  } else {
    return discordApiToken;
  }
}

exports.nodeEnv = nodeEnv;
exports.env = env;
exports.getConfig = getConfig;
/* nodeEnv Not a pure module */