'use strict';

const emojis = ['😀', '😊', '🔥', '🌟', '🎉', '🍕', '🐶', '🌺', '🌞'];

module.exports.rank = async (event) => {

  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: rankEmoji,
        event
      },
      null,
      2
    ),
  };
};
