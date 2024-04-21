export default function SearchBar({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="mb-2">
            <input
                className="bg-green-100 rounded-l-md px-4 py-3 focus:outline focus:outline-2 focus:outline-green-600"
                name="search"
                type="text"
                placeholder="Search an username…"
            />
            <input
                className="bg-green-400 rounded-r-md px-4 py-3 hover:cursor-pointer font-semibold"
                type="submit"
                name="submit"
                value="Search"
            />
        </form>
    )
}
