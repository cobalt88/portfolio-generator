const profileDataArgs = process.argv.slice(2, process.argv.length);
const printProfileData = profileDataArr => {
  for (let i = 0; i < profileDataArgs.length; i++) {
    console.log(profileDataArr[i]);
  }
};

printProfileData(profileDataArgs);