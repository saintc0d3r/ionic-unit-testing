describe('Chats service test', function(){
  var chats;
  beforeEach(module('starter.services'));

  beforeEach(inject(function(Chats){
    chats = Chats;
  }));

  it('should return one or more chats', function(){
    // Act
    var result = chats.all();

    // Assert
    expect(result).not.toBeNull();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should be able to return a chat by id', function(){
    // Arrange
    var chatId = 2;

    // Act
    var result = chats.get(chatId);

    // Assert
    expect(result).not.toBeNull();
    expect(result.id).toEqual(chatId);
    expect(result.name).toEqual('Adam Bradleyson');
    expect(result.lastText).toEqual('I should buy a boat');
    expect(result.face).toEqual('https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg');
  });

  it('should be able to remove an existing chat', function(){
    var chatId = 3;
    expect(chats.get(chatId)).not.toBeNull();
    chats.remove(chatId);
    expect(chats.get(chatId)).not.toBeUndefined();
  });

});
