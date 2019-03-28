class UiBuilder {
  constructor() {
    this.setupForm();
  }

  setupForm() {
    this.userdetailsdiv = document.getElementById('UserDetails');
    this.userrepossdiv = document.getElementById('userRepos');
  }

  createUserDetails(user) {
    if (user == null) {
      this.hideData();
    }
    else {
      this.userdetailsdiv.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.photo_url}" width=150>
              <a href ="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.reposcount}</span>
              <span class="badge badge-secondary">Public Gists: ${user.reposcount}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            
            <ul class="list-group">
              <li class="list-group-item">Name: ${user.username}</li>
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.website}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.joindate}</li>
            </ul>  
          </div>
        </div>
      </div>
      `;
    }
  }

  createUserRepos(user) {
    user.repos.sort(r => r.updated_at);
    let repos = user.repos.slice(0, 5);

    var reposHtml = '<h2>Latest Repos</h2><div class="card card-body mb-3"><ul class="list-group">'
    for (let repo of repos) {
      reposHtml += `<li class="list-group-item"><a href=${repo.html_url}>${repo.name}</a> ${repo.language}
                      <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                      <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                      <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                    </li>`
    }
    reposHtml += ' </ul></div>'

    this.userrepossdiv.innerHTML = reposHtml;
  }

  hideData() {
    this.userdetailsdiv.innerHTML = '';
    this.userrepossdiv.innerHTML = '';
  }
}
