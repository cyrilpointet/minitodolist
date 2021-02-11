export class Note {
  constructor(rawNote) {
    this.created = rawNote ? new Date(rawNote.created) : new Date();
    this.text = rawNote ? rawNote.text : "";
  }
}
