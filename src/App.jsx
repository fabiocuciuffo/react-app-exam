import { useState } from "react"
import SearchBar from "./Components/Form/SearchBar"
import fetchGithubApi from "./Utils/FetchGithubApi"
import ResultList from "./Components/Form/ResultList"
import ResultCount from "./Components/Form/ResultCount"
import LoadingResults from "./Components/Form/LoadingResults"
import UserProfile from "./Components/User/UserPofile"
function App() {
    const [results, setResults] = useState(null)
    const [loadingResults, setLoadingResults] = useState(false)
    const [loadingUser, setLoadingUser] = useState(false)
    const [userData, setUserData] = useState(null)
    const [userRepo, setUserRepo] = useState(null)
    let count = null
    if (results?.length) {
        count = results.length
    }
    function onSubmit(e) {
        e.preventDefault()
        const inputSearch = e.target.querySelector('[name="search"]')
        if (inputSearch.value === "") {
            return
        }
        setLoadingResults(true)
        const url = `https://api.github.com/search/users?q=${inputSearch.value}`
        inputSearch.value = ""
        const result = fetchGithubApi(url)
        result.then((data) => {
            setResults(data.items)
            setLoadingResults(false)
        })
    }

    function onClick(e) {
        setLoadingUser(true)
        const userId = e.currentTarget.dataset.id
        const url = `https://api.github.com/users/${userId}`
        const urlRepo = `https://api.github.com/users/${userId}/repos`
        const result = fetchGithubApi(url)
        const resultRepo = fetchGithubApi(urlRepo)
        result.then((data) => {
            setUserData(data)
            setLoadingUser(false)
        })
        resultRepo.then((data) => {
            console.log(data)
            setUserRepo(data)
        })
        setResults(null)
    }

    return (
        <main className="flex min-h-screen">
            <div className="container p-4 bg-green-50 min-w-fit h-screen overflow-y-scroll w-3/12">
                <SearchBar onSubmit={onSubmit} />
                <LoadingResults loading={loadingResults} />
                <ResultCount count={count} />
                <ResultList list={results} onClick={onClick} />
            </div>
            <div className="container p-4 bg-slate-50 w-9/12">
                <UserProfile user={userData} userRepo={userRepo} />
            </div>
        </main>
    )
}

export default App
