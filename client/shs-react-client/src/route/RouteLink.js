class RouteLink {
  constructor(path, element) {
    this.path = path;
    this.element = element;
  }

  with(id) {
    this.path += "/:" + id;
    return this;
  }

  replace(name, value) {
    return this.path.replace(":" + name, value);
  }
}

export default RouteLink;
