import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-1/5 bg-purple-100 p-4 h-screen">
            <div className="flex flex-col items-center">
                <div className="bg-purple-200 w-full p-4 mb-4 rounded">
                    Logo
                </div>
                <nav className="flex flex-col w-full">
                    <a href="#" className="bg-purple-300 p-2 mb-2 rounded hover:bg-purple-400">Home</a>
                    <a href="#" className="bg-purple-300 p-2 mb-2 rounded hover:bg-purple-400">Pages</a>
                    <a href="#" className="bg-purple-300 p-2 mb-2 rounded hover:bg-purple-400">Applications</a>
                    <a href="#" className="bg-purple-300 p-2 mb-2 rounded hover:bg-purple-400">Ecommerce</a>
                    <a href="#" className="bg-purple-300 p-2 mb-2 rounded hover:bg-purple-400">Authentication</a>
                    <a href="#" className="bg-purple-300 p-2 mb-2 rounded hover:bg-purple-400">Notification</a>
                    <a href="#" className="bg-purple-300 p-2 mb-2 rounded hover:bg-purple-400">Calendar</a>
                    <a href="#" className="bg-purple-300 p-2 mb-2 rounded hover:bg-purple-400">Message</a>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
