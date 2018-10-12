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

  async update(bla, data, params) {
    const { query: { id } } = params;
    try {
      const updated = await this.locations.filter(l => l.id === parseInt(id), 10).map(l => ({ ...l, lang: data.lang, long: data.long }));

      return updated;
    } catch (e) {
      console.error(e);
    }
  }
}

export default TraceService;
