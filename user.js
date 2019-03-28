class User {

  populateDetails(jsonDetails) {
    if (jsonDetails != null) {
      this.html_url = jsonDetails.html_url;
      this.username = jsonDetails.login;
      this.location = jsonDetails.location;
      this.company = jsonDetails.company;
      this.joindate = jsonDetails.created_at;
      this.website = jsonDetails.blog;
      this.photo_url = jsonDetails.avatar_url;
      this.followers = jsonDetails.followers;
      this.followers_url = jsonDetails.followers_url;
      this.following = jsonDetails.following;
      this.following_url = jsonDetails.following_url;
    }
  }

  populateRepos(jsonRepos) {
    let counter = 0;

    if (jsonRepos != null) {
      this.repos = jsonRepos;
      this.reposcount = this.repos.length;
    }
  }

}