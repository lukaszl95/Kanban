// KLASA KANBAN CARD
function Card(id, name) {
  var self = this;
  
  this.id = id;
  this.name = name || 'No name given';
  this.element = createCard();

  function createCard() {
    var card = $('<li class="card"></li>');
    var content = $('<div class="card-content"></div>')
    var cardDeleteBtn = $('<button class="btn-delete">x</button>');
    var cardDescription = $('<p class="card-description"></p>');
    
    cardDeleteBtn.click(function(){
      self.removeCard();
    });
    card.append(content)
    content.append(cardDeleteBtn);
    cardDescription.text(self.name);
    content.append(cardDescription)
    return card;
  }
}
Card.prototype = {
  removeCard: function() {
    var self = this;
    $.ajax({
      url: baseUrl + '/card/' + self.id,
      method: 'DELETE',
      success: function(){
        self.element.remove();
      }
    });
  }
}