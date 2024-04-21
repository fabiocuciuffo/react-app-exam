export default function ResultList({ list, onClick }) {
    if (list === null) {
        return (
            <div className="flex justify-center items-center p-10">
                <span className="text-gray-400">Results will appear here…</span>
            </div>
        )
    }
    return (
        <div className="min-h-max min-w-full">
            {list.map((el) => {
                return (
                    <div
                        className="flex bg-green-200 p-2 mb-2 hover:cursor-pointer rounded"
                        onClick={onClick}
                        key={el.id}
                        data-id={el.login}
                    >
                        <div className="w-3/12 flex justify-center items-center">
                            <img
                                src={el.avatar_url}
                                className="rounded-full h-14"
                            />
                        </div>
                        <div className="flex justify-center items-center w-9/12">
                            <span className="font-bold">{el.login}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
