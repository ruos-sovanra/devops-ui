'use client'
import { Bell, Upload } from "lucide-react";
import { useState, useCallback } from "react";

const SettingPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        avatarSrc: "/placeholder.svg?height=100&width=100"
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAvatarChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData(prevState => ({ ...prevState, avatarSrc: e.target?.result as string }));
            };
            reader.readAsDataURL(file);
        }
    }, []);

    return (
        <div>
            {/* Top Navigation */}
            <div className="border-b bg-white">
                <div>
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

            <div className="p-8 max-w-4xl">
                <h1 className="text-2xl font-semibold mb-2">Personal Information</h1>
                <p className="text-gray-600 mb-8">Use a permanent address where you can receive mail.</p>

                <div className="space-y-8">
                    {/* Avatar Section */}
                    <div className="flex items-start space-x-4">
                        <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden">
                            <img src={formData.avatarSrc} alt="Profile" className="h-full w-full object-cover" />
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
                        <FormField
                            label="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        <FormField
                            label="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <FormField
                        label="Email address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />

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
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FormField = ({ label, name, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
    </div>
);

export default SettingPage;