class CardList {
  constructor(container, cards) {
    this.container = container;
    this.cards = cards;
  }
  //Добавление карточки 
  addCard(link, name) {
    const { cardElement } = new Card(link, name);

  }
  //Рендер первоначальных карточек
  render() {
    const newArray = this.cards.map(function (item) {
      const { link, name } = item;
      return new Card(link, name);
    });
  }
}
