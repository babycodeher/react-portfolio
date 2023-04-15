

function HomePage() {
    return (
        <>
        {/* Flex container */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            {/* left item */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:textleft">
                    Wumi Afolabi
                </h1>

            </div>
            {/* right item */}
        </div>
        
        </>
    );
}

export default HomePage;