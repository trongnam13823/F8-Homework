import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
            <div className="container mx-auto px-4">
                <Header />
                {children}
            </div>
        </div>
    );
}
