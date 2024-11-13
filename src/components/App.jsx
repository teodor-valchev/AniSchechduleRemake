import "./App.css";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navigation from "./Navigation/Nav";

const App = () => {
    return (
        <>
            <Navigation />

            <div className="min-h-full">
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 shadow-2xl shadow-pink-500/50">
                            AniScheduleRemake
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <Home />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default App;
