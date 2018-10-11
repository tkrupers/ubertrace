class TraceService {
  constructor() {
    this.locations = [];
    this.currentId = 0;
  }

  async find(params) {
    // Return the list of all messages
    return this.locations;
  }

  async get(id, params) {
  }

  async create(data, params) {
    const location = {
      id: this.currentId += 1,
      ...data,
    };

    this.locations.push(location);

    return location;
  }

  async update(id, data, params) {
    const updated = await this.locations.filter(l => l.id === id).map(l => ({ ...l, lang: data.lang, long: data.long }));
    return updated;
  }

  async patch(id, data, params) {}

  async remove(id, params) {}
}

export default TraceService;
