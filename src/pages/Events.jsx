function Events() {
    const handleClick = () => {
        console.log("You clicked the main button!");
    };

    const handleHover = () => {
        console.log("You hovered over me!");
    };

    const handleInputChange = (e) => {
        console.log("You typed:", e.target.value);
    };

    return (
        <div className="p-4 space-y-4">
            <button
                onClick={handleClick}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Click Me
            </button>

            <div
                onMouseOver={handleHover}
                className="p-4 bg-gray-200 rounded cursor-pointer"
            >
                Hover over this box
            </div>

            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Type something..."
                className="border p-2 rounded"
            />
        </div>
    );
}

export default Events