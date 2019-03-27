class User {

  populateDetails(jsonDetails) {
    if (jsonDetails != null) {

      this.UserName = jsonDetails.login;
      this.Location = jsonDetails.location;
      this.Company = jsonDetails.company;
      this.JoinDate = jsonDetails.created_at;
      this.WebSite = jsonDetails.blog;
      this.PhotoUrl = 'https://avatars0.githubusercontent.com/u/4675870?v=4';
      this.Followers = jsonDetails.followers;
      this.FollowersUrl = jsonDetails.followers_url;
      this.Following = jsonDetails.following;
      this.FollowingUrl = jsonDetails.following_url;
    }
  }

  populateRepos(jsonRepos) {
    let counter = 0;
    
    if (jsonRepos != null) {
      this.Repos = jsonRepos;
      this.ReposCount = this.Repos.length;
      // for (let repo of jsonRepos) {
      //   console.log(counter++);
      // }

    }

  }
}