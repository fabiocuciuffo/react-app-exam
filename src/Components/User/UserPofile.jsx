import RepoList from "./RepoList"
export default function UserProfile({ user, userRepo }) {
    if (user === null) {
        return null
    } else {
        return (
            <div className="flex flex-col">
                <div className="flex">
                    <div className="flex justify-center items-center min-w-fit p-4">
                        <img
                            className="rounded-full h-52 w-52 bg-slate-100"
                            src={user.avatar_url}
                        />
                    </div>
                    <div className="bg-green-100 rounded-md p-8">
                        <p className="text-3xl font-bold">@{user.login}</p>
                        <p className="text-lg font-medium my-4">{user.bio}</p>
                        <div className="flex flex-col bg-green-700 rounded w-fit px-8 py-4 mx-auto">
                            <span className="font-bold text-white text-center mb-2">
                                Repositories
                            </span>
                            <div className="flex justify-around">
                                <div className="bg-green-100 p-8 rounded flex flex-col text-center min-w-32">
                                    <span className="font-black">Public</span>
                                    <span className="text-center text-xl">
                                        {user.public_repos}
                                    </span>
                                </div>
                                {user.total_private_repos ? (
                                    <div className="bg-green-100 p-8 rounded flex flex-col text-center min-w-32 ml-8">
                                        <span className="font-black">
                                            Private
                                        </span>
                                        <span className="text-center text-xl">
                                            {user.total_private_repos}
                                        </span>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <RepoList repos={userRepo} />
            </div>
        )
    }
}
