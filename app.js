const uiBuilder = new UiBuilder();
const gitApi = new GitApi('2a0767cf58c898851e9b', 'f3fe9f4592ff0132a9609f838e1708f35600b318');

const userTextBox = document.getElementById('userName');
let userName = '';
let user = null;

setup();

function setup() {
  userTextBox.addEventListener('keyup', onKeyUp);
}
function onKeyUp(e) {

  let value = userTextBox.value;
  if (value == '') {
    //clear UI
    userName = '';
    uiBuilder.hideData();
  }
  else {
    userName = value;
    //userName = 'Marcusquigley';
    console.log(userName);
    gitApi.getUserDetails(userName)
      .then(userData => displayUserDetails(userData))
      .catch(ex => console.error(ex));
  }
  // e.preventDefault();
}

function displayUserDetails(userData) {
  if (!userData.hasOwnProperty('message')) {
    user = new User();
    user.populateDetails(userData);
    uiBuilder.createUserDetails(user);

    gitApi.getUserRepos(userName)
      .then(userReposData => displayUserRepos(userReposData))
      .catch(ex => console.error(ex));
  }
  else {
    console.log('no user');
    uiBuilder.createUserDetails(null);
  }
}

function displayUserRepos(userRepoData) {
  user.populateRepos(userRepoData);
  uiBuilder.createUserRepos(user);
}

function initUser() {
  if (user == null) {
    user = new User();
  }
}