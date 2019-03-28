class GitApi {
  getUrlUserDetails = 'https://api.github.com/users';
  getUrlend = '/events/public';

  constructor(clientId, clientSecret) {
    this.gitClientId = clientId;// '';
    this.gitClientSecret = clientSecret;//'';
  }

  // getUser(id) {
  //   this.getUserDetails(id)
  //     .then(data => new User(data))
  //     .catch(ex => console.error(ex));
  //   //return new User(data);
  // }

  async getUserDetails(userId) {
    return await this.get(userId);

  }
  async getUserRepos(userId) {
    return await this.get(userId, '/repos');
  }

  async get(userId, other = '') {
    var url = this.getUrlUserDetails;
    const resp = await fetch(this.createUrl(url, userId, other));
    const data = await resp.json();
    return data;
  }

  createUrl(url, user, other) {
    let urlFull = `${url}/${user}${other}?client_id=${this.gitClientId}&client_secret=${this.gitClientSecret}`;
    // console.log(urlFull);
    return urlFull;
  }
}

