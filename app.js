const gitApi = new GitApi('2a0767cf58c898851e9b','f3fe9f4592ff0132a9609f838e1708f35600b318');
const userTextBox = document.getElementById('userName');
let userName = '';
let user = null;

setup();

function setup(){
  userTextBox.addEventListener('keyup', onKeyUp);
}
function onKeyUp(e){
  let value = userTextBox.value;
   if (value == ''){
     //clear UI
     userName = '';
   } 
   else{
    userName = userName + value;
    userName = 'Marcusquigley';
    user = new User();
     gitApi.getUserDetails(userName)
      .then(userData=>displayUserDetails(userData))
      .catch(ex=>console.error(ex));

      gitApi.getUserRepos(userName)
      .then(userReposData=>displayUserRepos(userReposData))
      .catch(ex=>console.error(ex));
   }
   
 // e.preventDefault();
}

function displayUserDetails(userData){
 // initUser();
 
  user.populateDetails(userData);
 
}
function displayUserRepos(userRepoData){
  //initUser();
  //console.log(userRepoData);
  user.populateRepos(userRepoData);
  console.log(user);
}


function initUser(){
  if (user==null){
    user = new User();
  }
}