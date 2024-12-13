export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error(`${member.name} уже в команде`);
    } else {
      this.members.add(member);
    }
  }

  addAll(...membersList) {
    membersList.forEach((member) => this.members.add(member));
  }

  toArray() {
    return Array.from(this.members);
  }
}
