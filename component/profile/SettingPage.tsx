import {Bell, Search, Upload} from "lucide-react";
import {useState} from "react";

const SettingPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [avatarSrc, setAvatarSrc] = useState("/placeholder.svg?height=100&width=100")

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setAvatarSrc(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }
    return (
        <div>
            {/* Top Navigation */}
            <div className="border-b bg-white">
                <div className="flex items-center justify-between px-8 py-4">
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="search"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <nav className="flex items-center space-x-8">
                        <button className="text-blue-600 font-medium">Account</button>
                        <button className="text-gray-600 font-medium">Notifications</button>
                        <button className="text-gray-600 font-medium">Billing</button>
                        <button className="text-gray-600 font-medium">Teams</button>
                        <button className="text-gray-600 font-medium">Integrations</button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Bell className="h-5 w-5 text-gray-600" />
                        </button>
                    </nav>
                </div>
            </div>

            {/* Profile Settings Content */}
            <div className="p-8 max-w-4xl">
                <h1 className="text-2xl font-semibold mb-2">Personal Information</h1>
                <p className="text-gray-600 mb-8">Use a permanent address where you can receive mail.</p>

                <div className="space-y-8">
                    {/* Avatar Section */}
                    <div className="flex items-start space-x-4">
                        <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden">
                            <img src={avatarSrc} alt="Profile" className="h-full w-full object-cover" />
                        </div>
                        <div>
                            <button
                                onClick={() => document.getElementById('avatar-upload')?.click()}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mb-1"
                            >
                                <Upload className="w-4 h-4 mr-2" />
                                Change avatar
                            </button>
                            <p className="text-sm text-gray-500">JPG, GIF or PNG. 1MB max.</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                className="hidden"
                                id="avatar-upload"
                            />
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First name
                            </label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last name
                            </label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  example.com/
                </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Timezone
                        </label>
                        <select
                            defaultValue="pst"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="pst">Pacific Standard Time</option>
                            <option value="mst">Mountain Standard Time</option>
                            <option value="cst">Central Standard Time</option>
                            <option value="est">Eastern Standard Time</option>
                        </select>
                    </div>

                    <div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingPage;