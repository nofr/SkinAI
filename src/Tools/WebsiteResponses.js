const Swal = require("sweetalert2");

const invalidFields = (message) => {
  return Swal.fire({
    title: "Invalid fields",
    icon: "error",
    confirmButtonText: message,
  });
};

const wrongCredentials = (message) => {
  return Swal.fire({
    title: "Invalid fields",
    icon: "error",
    confirmButtonText: message,
  });
};

const signUpSuccess = () => {
  return Swal.fire({
    title: "Signed Up",
    icon: "success",
    timer: 1000,
    showConfirmButton: false,
  });
};

const signInSuccess = () => {
  return Swal.fire({
    title: "Welcome back",
    icon: "success",
    timer: 1000,
    showConfirmButton: false,
  });
};

const formImageIssue = (msg) => {
  return Swal.fire({
    title: msg,
    icon: "error",
    timer: 1500,
    showConfirmButton: false,
  });
};

const itemUploaded = (msg) => {
  return Swal.fire({
    title: msg,
    text: "redirecting...",
    icon: "success",
    timer: 2500,
    showConfirmButton: false,
  });
};

const loggedOut = () => {
  return Swal.fire({
    title: "Logged out",
    icon: "error",
    timer: 1000,
    showConfirmButton: false,
  });
};

const confirmLogout = (setAuthenticated) => {
  return Swal.fire({
    text: "Logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      setAuthenticated(false);
      localStorage.clear();
      loggedOut();
    }
  });
};

const displayFormDoctorImage = (image) => {
  Swal.fire({
    title: "Please make sure to follow our image instructions.",
    text: "This is to make sure we're able to help you the best we can.",
    imageUrl: image,
    // imageWidth: 300,
    // imageHeight: 240,
    imageAlt: "Instructions Alert",
  });
};

const redirecting = () => {
  return Swal.fire({
    title: "Loading...",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
  });
};

const askForAllResultsDelete = (url, config) => {
  return Swal.fire({
    title: "Your results will be deleted and can't be recovered.",
    text: "Are you sure?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`${url}/remove-history`, config)
        .then(res => window.location.reload())
        .catch(err => console.log("Couldn't delete all results from the database"));
    }
  })
}

const askForOneResultDelete = (id, url, config) => {
  return Swal.fire({
    title: "Your results will be deleted and can't be recovered.",
    text: "Are you sure?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(url)
      axios.delete(`${url}/remove/${id}`, config)
        .then(res => window.location.reload())
        .catch(err => console.log("Couldn't delete result from the database"));
    }
  })
}

export { invalidFields, wrongCredentials, signUpSuccess, signInSuccess, itemUploaded, formImageIssue, confirmLogout, displayFormDoctorImage, redirecting, askForAllResultsDelete, askForOneResultDelete };
