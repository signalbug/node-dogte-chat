/**
 * Help / utility related handlers
 */

'use strict';

var readMe = require('../resources/ReadMeMessage.md');

module.exports = function(bot) {
  // My Id
  bot.onText(/^\/myid(?:@\w*)?\b/i, function(msg) {
    var chatId = msg.chat.id;
    return bot.sendMessage(chatId, msg.from.id);
  });

  // Echo
  bot.onText(/^\/echo(?:@\w*)?\b\s*(.+)/i, function(msg, match) {
    var chatId = msg.chat.id;
    var resp = match[1];
    return bot.sendMessage(chatId, resp);
  });

  // Help
  bot.onText(/^\/help(?:@\w*)?/i, function(msg) {
    var chatId = msg.chat.id;
    var resp = readMe;
    return bot.sendMessage(chatId, resp, { parse_mode: 'Markdown'});
  });

  bot.on('audio', function(msg) {
    return bot.sendMessage(msg.chat.id, 'audio file_id: ' + msg.audio.file_id);
  });

  bot.on('document', function(msg) {
    return bot.sendMessage(msg.chat.id, 'document file_id: ' + msg.document.file_id);
  });

  bot.on('photo', function(msg) {
    return bot.sendMessage(msg.chat.id, 'photo file_id: ' + msg.photo[0].file_id);
  });

  bot.on('sticker', function(msg) {
    return bot.sendMessage(msg.chat.id, 'sticker file_id: ' + msg.sticker.file_id);
  });

  bot.on('video', function(msg) {
    return bot.sendMessage(msg.chat.id, 'video file_id: ' + msg.video.file_id);
  });

  bot.on('voice', function(msg) {
    return bot.sendMessage(msg.chat.id, 'voice file_id: ' + msg.voice.file_id);
  });
};
