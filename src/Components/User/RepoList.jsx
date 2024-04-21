export default function RepoList({ repos }) {
    if (repos === null) {
        return null
    } else {
        return (
            <div className="flex flex-wrap justify-start items-start p-4">
                {repos.map((element) => {
                    return (
                        <a
                            href={element.html_url}
                            target="blank"
                            key={element.id}
                            className="p-4 bg-green-200 rounded me-4 mb-4"
                        >
                            {element.name}
                        </a>
                    )
                })}
            </div>
        )
    }
}
