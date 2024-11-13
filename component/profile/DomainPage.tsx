import {ExternalLink, Plus, Trash2} from "lucide-react";
import {useState} from "react";

const DomainPage = () => {

    const [domains, setDomains] = useState([
        { id: 1, name: 'example.com', status: 'Active', type: 'Primary' },
        { id: 2, name: 'test.com', status: 'Pending', type: 'Alias' },
        { id: 3, name: 'myapp.dev', status: 'Active', type: 'Subdomain' },
    ])

    const [newDomain, setNewDomain] = useState('')
    const addDomain = (e: React.FormEvent) => {
        e.preventDefault()
        if (newDomain) {
            setDomains([...domains, { id: domains.length + 1, name: newDomain, status: 'Pending', type: 'Alias' }])
            setNewDomain('')
        }
    }

    const removeDomain = (id: number) => {
        setDomains(domains.filter(domain => domain.id !== id))
    }
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Domains</h1>

            {/* Add New Domain Form */}
            <form onSubmit={addDomain} className="mb-8">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        value={newDomain}
                        onChange={(e) => setNewDomain(e.target.value)}
                        placeholder="Enter a new domain"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center"
                    >
                        <Plus className="h-5 w-5 mr-2"/>
                        Add Domain
                    </button>
                </div>
            </form>

            {/* Domains List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {domains.map((domain) => (
                        <tr key={domain.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{domain.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          domain.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {domain.status}
                      </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{domain.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 mr-4">
                                    <ExternalLink className="h-5 w-5"/>
                                </button>
                                <button onClick={() => removeDomain(domain.id)}
                                        className="text-red-600 hover:text-red-900">
                                    <Trash2 className="h-5 w-5"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DomainPage