import * as Blockly from "blockly/core";

const blockName = "invite_ur";

const blockData = {
  "message0": "Invite URL",
  "colour": "#502e6e",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function () {
  const code =  `invite.url`;
  return code;
};
