export default function ResultCount({ count }) {
    if (count === null) {
        return null
    }
    return (
        <div className="w-full mb-2 flex justify-center items-center">
            <span className="font-light">
                {count} result{count > 1 ? "s" : ""}
            </span>
        </div>
    )
}
