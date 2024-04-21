export default function LoadingResults({ loading }) {
    if (loading === true) {
        return (
            <div className="flex justify-center items-center bg-green-400 animate-pulse p-4 rounded-md">
                <span>Loading</span>
            </div>
        )
    } else {
        return null
    }
}
