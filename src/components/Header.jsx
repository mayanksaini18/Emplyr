import React from 'react'

const Header = () => {
    return (
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Company overview, employee management and reports.</p>
            </div>
            <div className="flex items-center gap-3">
                <input

                    placeholder="Search employees or ID..."
                    className="px-3 py-2 bg-white border rounded-lg text-sm shadow-sm focus:outline-none"
                />
                <button className="px-3 py-2 rounded-2xl bg-indigo-600 text-white shadow-sm">Invite</button>
                <button className="px-3 py-2 rounded-2xl border">Export</button>
            </div>
        </div>
    )
}

export default Header
