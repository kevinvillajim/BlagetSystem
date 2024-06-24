const Perfil = () => {
  const user = {
    name: "John Doe",
    photo: "https://example.com/user1.jpg", // URL directa de la foto del usuario
    bio: "Software Engineer",
    phone: "+1234567890",
    email: "john.doe@example.com",
    password: "password123",
  };
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-1/4 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img
            className="rounded-full w-16 h-16 object-cover"
            src={user.photo ? `data:image/*;base64,${user.photo}` : avatarImg}
            alt="avatar"
          />
        </div>
        <span className="font-bold text-lg">{user.name}</span>
        <div className="text-gray-600 dark:text-gray-400 flex items-center mt-1">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>

      <div className="w-3/4 px-10 py-6">
        <div className="mb-8">
          <h1 className="font-bold text-3xl mb-2 text-center">Personal info</h1>
          <h3 className="text-center text-gray-600 dark:text-gray-400">
            Basic info, like your name and photo
          </h3>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h4 className="font-bold text-xl mb-1">Profile</h4>
              <p className="text-sm text-gray-500">
                Some info may be visible to other people
              </p>
            </div>
            <a
              href="/edit-profile"
              className="px-4 py-2 border rounded-md border-gray-300"
            >
              Edit
            </a>
          </div>

          {/* Photo */}
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
            <div className="w-1/5">
              <h6 className="text-gray-500 text-xs font-medium">PHOTO</h6>
            </div>
            <div className="w-4/5 flex items-center">
              <img
                className="rounded-md w-12 h-12 object-cover"
                src={
                  user.photo ? `data:image/*;base64,${user.photo}` : avatarImg
                }
                alt="profile"
              />
            </div>
          </div>

          {/* Name */}
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
            <div className="w-1/5">
              <h6 className="text-gray-500 text-xs font-medium">NAME</h6>
            </div>
            <div className="w-4/5">{user.name}</div>
          </div>

          {/* Bio */}
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
            <div className="w-1/5">
              <h6 className="text-gray-500 text-xs font-medium">BIO</h6>
            </div>
            <div className="w-4/5">{user.bio}</div>
          </div>

          {/* Phone */}
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
            <div className="w-1/5">
              <h6 className="text-gray-500 text-xs font-medium">PHONE</h6>
            </div>
            <div className="w-4/5">{user.phone}</div>
          </div>

          {/* Email */}
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
            <div className="w-1/5">
              <h6 className="text-gray-500 text-xs font-medium">EMAIL</h6>
            </div>
            <div className="w-4/5">{user.email}</div>
          </div>

          {/* Password */}
          <div className="flex items-center">
            <div className="w-1/5">
              <h6 className="text-gray-500 text-xs font-medium">PASSWORD</h6>
            </div>
            <div className="w-4/5">
              {Array(user.password.length).fill("•").join("")}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-gray-600 text-xs">created by</p>
            <a
              href="https://github.com/kevinvillajim"
              className="text-blue-500 text-xs font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              kevinvillajim
            </a>
          </div>
          <div className="text-xs">devChallenges.io</div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
