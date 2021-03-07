export default class GameSaving {
  constructor(data) {
    const parsed = JSON.parse(data);
    this.id = parsed.id;
    this.created = parsed.created;
    this.userInfo = JSON.parse(JSON.stringify(parsed.userInfo));
  }
}
