
export const DemoCard = () => {
    return (
        <div
            className=" rounded-3xl w-fit flex-col drop-shadow-2xl flex mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-neutral-800 bg-gradient-to-r from-stop1 to-stop2 to-stop3">

            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden border-slate-600">
                <img className="object-cover object-center h-32"
                     src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                     alt='Woman looking front'/>
            </div>
            <div className="text-center mt-2 p-2 mx-4 font-Manrope">
                <h2 className="font-semibold text-xl">Sarah Smith</h2>
                <p className="text-neutral-600">Freelance Web Designer</p>
            </div>
            <div className=" mx-8  pb-4">
                <button
                    className="w-fit block mx-auto rounded-full bg-blue-500 hover:shadow-lg font-semibold text-white px-6 py-2">Verify
                </button>
            </div>
        </div>
    )

}

export default DemoCard;